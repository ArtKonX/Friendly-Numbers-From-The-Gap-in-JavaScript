function getOwnDivisors(num){
    let arr = [];
    for (let i = 1; i < num; i++){
        if (num % i == 0){
            arr.push(i);
        }
    }
    return arr;
}
function sumElementsArray(arr){
    sum = 0;
    for (elem of arr){
        sum += elem;
    }
    return sum;
}
function isFriendlyNumbers(numberFirst, numberSecond){
    let sumFirst = sumElementsArray(getOwnDivisors(numberFirst));
    let sumSecond = sumElementsArray(getOwnDivisors(numberSecond));
    if (sumFirst == numberSecond && sumSecond == numberFirst) {
        return true;
    } else {
        return false;
    }
}
function getFriendlyRange(rangeNumberFirst, rangeNumberSecond){
    let arr = [];
    for (let i = rangeNumberFirst; i < rangeNumberSecond; i++){
        for (let j = i + 1; j < rangeNumberSecond; j++){
            if (isFriendlyNumbers(i, j)){
                arr.push([i, j]);
            }
        }
    }
    return arr;
}
console.log(getFriendlyRange(1, 2000));