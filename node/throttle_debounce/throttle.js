const throttle = (func, limit) => {
    let inThrottle
    return function () {
        const args = arguments
        const context = this
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    inThrottle = false;
                    console.log("here");
                    return resolve();
                }, limit)
            })
        }
    }
}

function execute() {
    throttle(function () {
        return console.log('Hey! It is', new Date().toUTCString());
    }, 1000)()
}
execute();
execute();
execute();
execute();
execute();
execute();