/**
 * Time Complexity => O(n)
 * Space Complexity => O(1) + O(1) + O(1) + O(1) + O(1) + O(1) + O(1) + O(2) ~= O(1)
 */
function combination(dayBeforeYesterday, yesterday, today) {
    let totalEggs = 0
    let bufferEggs = 0.01 // 1% percent
    let totalDaysOfOperation = 3
    let totalHoursOfOperationInADay = 12
    let averageEggsPerHour = null
    let totalEggsNeedToOrder = null
    let totalHoursOfOperationExecuted = dayBeforeYesterday.length + yesterday.length + today.length
    let eggsRequired = { dayBeforeYesterday: null, yesterday: null, today: null };

    dayBeforeYesterday.forEach(eggs => {
        eggsRequired.dayBeforeYesterday += eggs
    });

    yesterday.forEach(eggs => {
        eggsRequired.yesterday += eggs
    });

    today.forEach(eggs => {
        eggsRequired.today += eggs
    });

    for (let eggs in eggsRequired) {
        totalEggs += eggsRequired[eggs]
    }

    averageEggsPerHour = Math.ceil(totalEggs / (totalHoursOfOperationExecuted))
    totalEggsNeedToOrder = averageEggsPerHour * totalHoursOfOperationInADay;
    //Adding some buffer eggs so we can fulfill every customer's need
    totalEggsNeedToOrder = Math.ceil(totalEggsNeedToOrder + totalEggsNeedToOrder * bufferEggs)
    return totalEggsNeedToOrder
}

console.log(combination([79, 82, 42, 44, 43, 55, 62, 87, 85, 88, 89, 81], [81, 77, 45, 41, 39, 48, 71, 78, 81, 84, 82, 72],
    [77, 53, 33, 32, 49, 53, 68, 71])); // total 788 for today having 65 as the average per hour and 1% eggs in buffer