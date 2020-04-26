let moment = require('moment');
// var date = moment('2016-10-19', 'DD-MM-YYYY', true).isValid();
var date = moment('10-19-2016', 'DD-MM-YYYY', true).isValid();
console.log(new Date('10-19-2016'))
console.log(new Date('2016-19-10'))
console.log(date)
console.log(moment('2016-19-10', 'YYYY-MM-DD').isValid())
console.log(moment('2016-10-19', 'YYYY-MM-DD').isValid())