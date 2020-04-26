class insertionSort {
    sort(ar) {
        for (let index = 1; index < ar.length; index++) {
            for (let prevIndex = index - 1; prevIndex >= 0; prevIndex--) {
                if (ar[prevIndex + 1] < ar[prevIndex]) {
                    let backupElement = ar[prevIndex];
                    ar[prevIndex] = ar[prevIndex + 1];
                    ar[prevIndex + 1] = backupElement;
                }
            }
        }
        return ar;
    }
}

console.time("IS");
console.log(new insertionSort().sort([4, 3, 2, 10, 12, 1, 5, 6]));
console.timeEnd("IS");
