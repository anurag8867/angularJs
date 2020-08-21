function findFrequencyWithoutLoop(orgArray, element = null, obj = {}, index = 0) {
    if (index === orgArray.length) return obj;
    if (element) {
        if (obj[element]) {
            obj[element]++
        } else {
            obj[element] = 1
        }
    }
    findFrequency(orgArray, orgArray[index], obj, ++index)
    return obj;
}

let a = [5, 3, 2, 3, 5, 6, 3, 1]
console.log(findFrequency(a));