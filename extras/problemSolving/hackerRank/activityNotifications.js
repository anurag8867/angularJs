function findMedian(ar) {
    ar = ar.sort((a, b) => a - b);
    let length = ar.length;
    let halfLength = length / 2;
    if (length % 2 === 0) {
        return (ar[halfLength - 1] + ar[halfLength + 1]) / 2;
    }
    return (ar[Math.floor(halfLength)]);
}

function activityNotifications(expenditure, d) {
    let median = 0, count = 0;
    for (let index = d; index < expenditure.length; index++) {
        median = findMedian(expenditure.slice(index - d, index));
        if ((2 * median) <= expenditure[index]) count++;
    }
    return count;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))
console.log(activityNotifications([10, 20, 30, 40, 50], 3))
console.log(activityNotifications([1, 2, 3, 4, 4], 4))