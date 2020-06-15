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

function getAr(ar) {
    let arr = [], sum = 0;
    for (let index = ar.length - 1; index >= 0; index--) {
        sum += ar[index];
        arr.push(sum);
    }
    return arr.reverse();
}

function equalStacks(h1, h2, h3) {
    let maxheight = 0;
    if (!h1.length || !h2.length || !h3.length) {
        return maxheight;
    } else {
        let h1Ar = getAr(h1), h2Ar = getAr(h2), h3Ar = getAr(h3);
        if(h1Ar[0] === h2Ar[0] && h2Ar[0] === h3Ar[0]) {
            return h1Ar[0];
        }
        let index2 = 0, index3 = 0;
        for (let index = 0; index < h1Ar.length; index++) {
            h1Ar.shift();
            if(!h1Ar.length) {
                return 0;
            }
            if(h1Ar[0] === h2Ar[0] && h2Ar[0] === h3Ar[0]) {
                return h1Ar[0];
            }
            for (index2 = 0; index2 < h2Ar.length; index2++) {
                h2Ar.shift();
                if(!h2Ar.length) {
                    return 0;
                }
                if(h1Ar[0] === h2Ar[0] && h2Ar[0] === h3Ar[0]) {
                    return h1Ar[0];
                }
                for (index3 = 0; index3 < h3Ar.length; index3++) {
                    h3Ar.shift();
                    if(!h3Ar.length) {
                        return 0;
                    }
                    if(h1Ar[0] === h2Ar[0] && h2Ar[0] === h3Ar[0]) {
                        return h1Ar[0];
                    }
                }
            }
        }
    }
    return maxheight;
}

console.time();
console.log(equalStacks([3, 2, 1, 1, 1],
    [4, 3, 2],
    [1, 1, 4, 1]));
console.timeEnd();