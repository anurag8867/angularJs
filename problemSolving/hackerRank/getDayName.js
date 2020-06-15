function getDayName(dateString) {
    let ar = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    switch (new Date(dateString).getDay()) {
        case 0: return ar[0];
        case 1: return ar[1];
        case 2: return ar[2];
        case 3: return ar[3];
        case 4: return ar[4];
        case 5: return ar[5];
        case 6: return ar[6];
    }

}