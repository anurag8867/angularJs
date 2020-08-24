/**
 * Time Complexity => O(a.length) * O(b.length) ~ O(n^2)
 * Space Complexity => O(n)
 */
function combination(a, b, c) {
    let sumObj = {};
    let count = 0;
    // making an object to achieve O(1) time complexity, while checking the possibility of the sum
    c.forEach(function (value) {
        sumObj[value] = value
    })

    for (let aIndex = 0; aIndex < a.length; aIndex++) {
        for (let bIndex = 0; bIndex < b.length; bIndex++) {
            if (sumObj[a[aIndex] + b[bIndex]]) {
                count++
            }
        }
    }

    return count;
}

console.log(combination([1, 2, 7], [1, 3, 9], [2, 4, 10])); //4