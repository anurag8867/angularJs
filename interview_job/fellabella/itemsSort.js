function itemsSort(array) {
    var frequency = {};
    var sortAble = [];
    var newArr = [];
    array.forEach(function (value, i) {
        frequency[value] = {
            occurance: (frequency[value] && frequency[value].occurance || 0) + 1,
        };
    });
    for (var key in frequency) {
        sortAble.push([parseInt(key), frequency[key].occurance])
    }
    sortAble.sort(function (a, b) {
        if (a[1] == b[1]) {
            return a[0] - b[0];
        }
        return parseInt(a[1]) - parseInt(b[1])
    });
    
    sortAble.forEach(function (obj) {
        for (var i = 0; i < obj[1]; i++) {
            newArr.push(obj[0]);
        }
    })
    return newArr;
}

itemsSort([4, 5, 6, 5, 4, 3])