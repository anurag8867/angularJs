var clearbit = require('clearbit')('api_key');

var Company = clearbit.Company;
Company.find({ domain: 'www.uber.com' })
    .then(function (company) {
        console.log('Name: ', company.name);
    })
    .catch(Company.QueuedError, function (err) {
        console.log(err); // Company is queued
    })
    .catch(Company.NotFoundError, function (err) {
        console.log(err); // Company could not be found
    })
    .catch(function (err) {
        console.log('Bad/invalid request, unauthorized, Clearbit error, or failed request', err);
    });