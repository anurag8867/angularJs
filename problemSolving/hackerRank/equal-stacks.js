function checkSum(sumOfh1, sumOfh2, sumOfh3) {
    if (sumOfh1 === sumOfh2 && sumOfh2 === sumOfh3) {
        return sumOfh1;
    }
    return false;
}

function getSum(arr) {
    return arr.reduce(function (sum, ele) {
        return sum + ele;
    });
}

function equalStacks(h1, h2, h3) {
    let maxheight = 0;
    if (!h1.length || !h2.length || !h3.length) {
        return maxheight;
    } else {
        let h1Sum = getSum(h1), h2Sum = getSum(h2), h3Sum = getSum(h3);
        if (h1Sum === h2Sum && h2Sum === h3Sum) {
            return h1Sum;
        }
        for (let index = 0; index < h1.length; index++) {
            h1.shift();
            if (!h1.length) {
                return 0;
            }
            h1Sum = getSum(h1);
            if (checkSum(h1Sum, h2Sum, h3Sum)) {
                return h2Sum;
            }
            for (let index2 = 0; index2 < h2.length; index2++) {
                h2.shift();
                if (!h2.length) {
                    return 0;
                }
                h2Sum = getSum(h1);
                if (checkSum(h1Sum, h2Sum, h3Sum)) {
                    return h2Sum;
                }
                for (let index3 = 0; index3 < h3.length; index3++) {
                    h3.shift();
                    if (!h3.length) {
                        return 0;
                    }
                    h3Sum = getSum(h3);
                    if (checkSum(h1Sum, h2Sum, h3Sum)) {
                        return h3Sum;
                    }
                }
            }
        }
    }
}

console.time();
console.log(equalStacks([3, 2, 1, 1, 1],
    [4, 3, 2],
    [1, 1, 4, 1]));
console.timeEnd();