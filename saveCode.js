//Search for Phone
if (search && parseInt(search)) {
    let companyCandidateMappingQuery = {
        model: companyCandidateMapping,
        where: {
            deleted_at: null,
            company_id: companyId
        },
        required: true,
        include: [{
            model: candidateForm,
        }]
    };

    if (typeof days !== 'undefined' && days !== null) addDaysToQuery(days, companyCandidateMappingQuery.where)
    if (status) addStatusToQuery(status, companyCandidateMappingQuery.where);
    if (dateRange && dateRange.from && dateRange.to) {
        addDateRangeToQuery(companyCandidateMappingQuery.where, dateRange);
        days = null;
    }

    checksTablesList.push(companyCandidateMappingQuery);
    let response = await candidatesMetadata.findAndCountAll({
        where: {
            deleted_at: null,
            belongs_to: 'CANDIDATE',
            type: 'PHONENUMBER',
            [Op.or]: [
                { data: { [Op.like]: '%' + search + '%' } },
            ]
        },
        order: [['updated_at', 'DESC']],
        offset: offset * limit,
        limit: limit,
        include: tablesToInclude
    });
    function restructureGetCandidatesCompanyData(data) {
        let candidates = [];
        data.forEach((value) => {
            let record = value.candidate.company_candidate_mapping;
            let candidate = value.dataValues.candidate;
            record.candidate = candidate;
            candidates.push(record);
        });
        return JSON.parse(JSON.stringify(candidates));
    }
    return {
        rows: restructureGetCandidatesCompanyData(response.rows),
        count: response.count
    };
}






funcs.findCandidatesInCompany = async function (
    companyId, offset, limit, status = null, category = null, search = null, ids = null,
    accessLevel = null, userId = null, userCategory = null, days = null, dateRange = {}
) {
    let checksTablesList = [
        { model: candidateId },
        { model: candidateDrug },
        { model: candidateCredit },
        { model: candidateAddress },
        { model: candidateEdu },
        { model: candidateEmp },
        { model: candidateWorldCheck },
        { model: candidateCourtCheck },
        { model: candidateRefCheck },
        { model: users }
    ];

    includeRequiredFlag(checksTablesList);
    includeDeletedAtFlag(checksTablesList);
    //This function will include the company categories table to the query
    // includeCompanyCategoryQuery(category, checksTablesList);
    //This function will include the user categories table to the query
    // includeUserCategoryQuery(userCategory, checksTablesList);

    if (search && parseInt(search)) {
        checksTablesList.push({
            model: candidatesMetadata,
            where: {
                deleted_at: null,
                belongs_to: 'CANDIDATE',
                type: 'PHONENUMBER',
                [Op.or]: [
                    { data: { [Op.like]: '%' + search + '%' } },
                ]
            }
        })
    }

    let tablesToInclude = {
        model: candidate,
        where: {
            deleted_at: null
        },
        required: true,
        include: checksTablesList
    };
    //User id has to consider only in case of hr, because he is not authorize to see the other candidate
    //which he hasn't added
    if (accessLevel === config.get('user.access_levels.hr')) tablesToInclude["where"]["user_id"] = userId;

    (search && !parseInt(search)) ? tablesToInclude["where"] = {
        [Op.or]: [
            { email: { [Op.like]: '%' + search + '%' } },
            { name: { [Op.like]: '%' + search + '%' } },
        ],
        deleted_at: null
    } : { deleted_at: null };

    let whereQuery = {
        company_id: companyId, deleted_at: null
    };
    //In case you want to fetch the candidates for some candidates Ids
    if (ids && ids.length && Array.isArray(ids)) {
        whereQuery["candidate_id"] = ids;
    }

    //If we want to fetch some candidates on behalf of some date range
    if (dateRange && dateRange.from && dateRange.to) {
        addDateRangeToQuery(whereQuery, dateRange);
        days = null;
    }

    if (typeof days !== 'undefined' && days !== null) addDaysToQuery(days, whereQuery)
    let query = {
        where: whereQuery,
        order: [['updated_at', 'DESC']],
        offset: offset * limit,
        limit: limit,
        include: [
            tablesToInclude,
            { model: candidateForm }
        ]
    };
    if (status) addStatusToQuery(status, query.where);
    return companyCandidateMapping.findAndCountAll(query);
}