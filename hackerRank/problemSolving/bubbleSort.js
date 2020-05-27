class bubbleSort {
    sort(ar) {
        for (let index = 0; index < ar.length; index++) {
            for (let index1 = 0; index1 < ar.length-1; index1++) {
                if(ar[index1] > ar[index1+1]) {
                    let backupElement = ar[index1];
                    ar[index1] = ar[index1+1];
                    ar[index1+1] = backupElement;

                }
            }
        }
        return ar;
    }
}
console.time("bubbleSort");
console.log(new bubbleSort().sort([4, 3, 2, 10, 12, 1, 5, 6]));
console.timeEnd("bubbleSort");
