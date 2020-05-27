let iterator = function () {

    for (let ele in arr) {
        console.log(ele);
    }
    for (let ele of arr) {
        console.log(ele);
    }
    arr.forEach(console.log)
}





module.exports = iterator;