function findSubjectMatches(topic, index, index2) {
    let matches = 0;
    for (let ind = 0; ind < topic[index].length; ind++) {
        if ((topic[index] && topic[index][ind] && Number(topic[index][ind])) ||
            (topic[index2] && topic[index2][ind] && Number(topic[index2][ind]))) {
            matches++;
        }
    }
    return {
        [`${index + 1}_${index2 + 1}`]: matches
    }
}

function acmTeam(topic) {
    let highestMatches = 0, currentMatches = 0, teams = 0;
    for (let index = 0; index < topic.length - 1; index++) {
        for (let index2 = index + 1; index2 < topic.length; index2++) {
            let resp = findSubjectMatches(topic, index, index2);
            currentMatches = resp[Object.keys(resp)[0]];
            if (highestMatches < currentMatches) {
                highestMatches = currentMatches;
                teams = 1;
            } else if (highestMatches === currentMatches) {
                teams++;
            }
        }
    }
    return [highestMatches, teams];
}

console.log(acmTeam([
    '10101',
    '11100',
    '11010',
    '00101'
]))