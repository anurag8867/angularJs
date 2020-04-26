
function calculateMinDifference(date2, date1) {
    // if (date2 < date1) return 0
    return parseInt(date2) - parseInt(date1);
}
function calculateSecDifference(date2, date1) {
    // if (date2 < date1) return 0
    return parseInt(date2) - parseInt(date1);

}
function calculateHourDifference(date2, date1) {
    // if (date2 < date1) return 0
    return parseInt(date2) - parseInt(date1);
}

function main(input) {
    input = input.split(",");
    let now = input[0].split(":");
    let len = input[1];
    let times = input.slice(2);
    let output = "";
    times.forEach((val, index, array) => {
        let value = val.split(":");
        let hour = calculateHourDifference(now[0], value[0]);
        let min = calculateMinDifference(now[1], value[1]);
        let sec = calculateSecDifference(now[2], value[2]);
        console.log({ hour, min, sec });
        if (sec < 0) {
            sec += 60;
            min -= 1
        }
        if (min < 0) {
            min += 60;
            hour -= 1
        }
        if (min !== 0 && Math.abs(min * 60 + sec) < 60) {
            sec = Math.abs(min * 60 + sec);
            min = 0;
        }
        if (hour !== 0 && Math.abs(min * 60 + sec) < 60) {
            sec = Math.abs(min * 60 + sec);
            min = 0;
        }
        if (hour === 0 && min === 0 && sec === 0) {
            output += `now\n`;
        } else if (hour === 0 && min === 0 && sec === 1) {
            output += `1 second ago\n`;
        }
        else if (hour === 0 && min === 0) {
            output += `${sec} seconds ago\n`;
        }
        else if (hour === 0 && min === 1) {
            output += `1 minute ago\n`;
        }
        else if (hour === 0) {
            output += `${min} minutes ago\n`;
        }
        else if (hour === 1) {
            output += `1 hour ago\n`;
        }
        else {
            output += `${hour} hours ago\n`;
        }
    });
    console.log(output);
}
main("23:05:38,7,23:05:38,23:05:02,23:04:59,23:04:31,12:36:07,08:59:01,00:00:00");