console.log(JSON.parse(JSON.stringify({ key: `12345` })))
console.log(JSON.parse(JSON.stringify({ key: undefined })))
console.log(JSON.parse(JSON.stringify({ key: -1 })))
console.log(JSON.parse(JSON.stringify({ key: null })))
console.log(JSON.parse(JSON.stringify({ key: NaN })))
console.log(JSON.parse(JSON.stringify({ key: Infinity })))
console.log(Infinity)
console.log(JSON.stringify({
    key: function (a) {
        console.log('object')
    }
}))