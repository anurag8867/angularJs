function minNum(samDaily, kellyDaily, difference) {
    if (kellyDaily + difference == samDaily) {
        return -1
    }
    let x = difference / ((kellyDaily - samDaily) || 1)
    if (x < 0) return -1;
    return Math.floor((x + 1));
}