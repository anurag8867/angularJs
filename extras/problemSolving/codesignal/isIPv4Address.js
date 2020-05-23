function isIPv4Address(array) {
    let ar = array.split(".");
    if (ar.length !== 4) return false;
    for (let index = 0; index < ar.length; index++) {
        if (!ar[index]) return false;
        if (ar[index].length !== 1 && ar[index][0] === '0') return false;
        if (ar[index] === "00" || ar[index] === "000") return false;
        if (ar[index] >= 0 && ar[index] <= 255) {
            continue;
        }
        return false
    }
    return true;
}

console.log(isIPv4Address("01.233.161.131"))
console.log(isIPv4Address("0.254.255.0"))
console.log(isIPv4Address("00.233.161.00"))
console.log(isIPv4Address("172.316.254.1"))
console.log(isIPv4Address("172.16.254.1"))
console.log(isIPv4Address(".254.255.0"))