
function preprocessDate(dates) {
    let months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: 10,
        Nov: 11,
        Dec: 12,
    }
    // Write your code here
    let resp = [], temp = "";
    dates.forEach((value) => {
        let split = value.split(" ")
        temp = ""
        let date = split[0].substring(0, split[0].length - 2)
        temp += split[2]
        temp += `-${months[split[1]]}`
        temp += `-${date.length === 1 ? `0${date}` : date}`
        resp.push(temp)
    })
    return resp
}
