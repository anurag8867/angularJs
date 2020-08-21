function findLength(list) {
    let count = 0;
    if (!list) return count;
    count++;
    while (list.rightRef !== null) {
        list = list.rightRef
        count++;
    }
    return count;
}

module.exports = { findLength }