let wrongMap = new Map()
wrongMap.set('bla', 'blaa')
wrongMap.set('bla2', 'blaaa2')
wrongMap.set('bla3', 'blaaa2')
wrongMap.set('bla4', 'blaaa2')
for (let [key, value] of wrongMap) {
    console.log(key, value)
}
wrongMap.delete('bla2')
for (let [key, value] of wrongMap) {
    console.log(key, value)
}
console.log(wrongMap)