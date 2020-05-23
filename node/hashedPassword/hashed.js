var bluebird = require('bluebird')
var bcrypt = require('bcrypt'),
    saltRounds = 12;
var twinBcrypt = require('twin-bcrypt');
let hashedpassword = await bcrypt.hash('helloWorld', saltRounds);

var string = 'helloworld'

var bcryptAttempt = bcrypt.compareSync(string, "$2y$10$Am0Nf/B6.S/Wkpr6IVdIZeuHWNa/fqoLyTNmlyrSg22AjRf2vS.T.".replace(/^\$2y/, "$2a"))
console.log(bcryptAttempt)

var twinBcryptAttempt = twinBcrypt.compareSync(string, "$2y$10$Am0Nf/B6.S/Wkpr6IVdIZeuHWNa/fqoLyTNmlyrSg22AjRf2vS.T.")
console.log(twinBcryptAttempt);



bluebird.promisifyAll(bcrypt)

var hashesGeneratedUsingBcryptModule = [
    '$2a$10$6ppmIdlNEPwxWJskPaQ7l.d2fblh.GO6JomzrcpiD/hxGPOXA3Bsq',
    '$2a$10$YmpoYCDHzdAPMbd9B8l48.hkSnylnAPbOym367FKIEPa0ixY.o4b.',
    '$2a$10$Xfy3OPurrZEmbmmO0x1wGuFMdRTlmOgEMS0geg4wTj1vKcvXXjk06',
    '$2a$10$mYgwmdPZjiEncp7Yh5UB1uyPkoyavxrYcOIzzY4mzSniGpI9RbhL.',
    '$2a$10$dkBVTe2A2DAn24PUq1GZYe7AqL8WQqwOi8ZWBJAauOg60sk44DkOC'
]

var hashesGeneratedUsingAspirineDotOrg = [
    '$2y$10$MKgpAXLJkwx5tpijWX99Qek2gf/irwvp5iSfxuFoDswIjMIbj2.Ma',
    '$2y$10$tRM7x9gGKhcAmpeqKEdhj.qRWCr4qoV1FU9se0Crx2hkMVNL2ktEW'
]

var hashesGeneratedUsingAspirineDotOrgSwippedYForA = [
    '$2a$10$MKgpAXLJkwx5tpijWX99Qek2gf/irwvp5iSfxuFoDswIjMIbj2.Ma',
    '$2a$10$tRM7x9gGKhcAmpeqKEdhj.qRWCr4qoV1FU9se0Crx2hkMVNL2ktEW'
]

hashesGeneratedUsingBcryptModule = hashesGeneratedUsingBcryptModule.map(hash => bcrypt.compareAsync(string, hash))
hashesGeneratedUsingAspirineDotOrg = hashesGeneratedUsingAspirineDotOrg.map(hash => bcrypt.compareAsync(string, hash))
hashesGeneratedUsingAspirineDotOrgSwippedYForA = hashesGeneratedUsingAspirineDotOrgSwippedYForA.map(hash => bcrypt.compareAsync(string, hash))

bluebird.all(hashesGeneratedUsingBcryptModule)
    .tap(() => console.log('hashesGeneratedUsingBcryptModule'))
    .then(console.log)

bluebird.all(hashesGeneratedUsingAspirineDotOrg)
    .tap(() => console.log('hashesGeneratedUsingAspirineDotOrg'))
    .then(console.log)

bluebird.all(hashesGeneratedUsingAspirineDotOrgSwippedYForA)
    .tap(() => console.log('hashesGeneratedUsingAspirineDotOrgSwippedYForA'))
    .then(console.log)