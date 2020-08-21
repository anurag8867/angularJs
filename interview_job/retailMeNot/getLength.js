function getLength(number) {
    if (number < 0) {
        return (number.toString().length - 1);
    } else {
        return number.toString().length;
    }
}
function solution(A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (getLength(A[i]) == 2) {
            sum += A[i];
        }
    }
    return sum;
}