let anurag = (next: Function) => {
    let array = [];
    for (let index = 0; index < 5; index++) {
        array.push(index)
    }
    next(null, array);
}

anurag(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})
