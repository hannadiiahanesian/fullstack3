const mixedArray = ['Matrix', 1, true, 2, false, 3];

let multiplyNumbers = (mixedArray) => {
    return !isNaN(parseFloat(mixedArray)) && isFinite(mixedArray);;
}

let filterMultiplyNumbers = mixedArray.filter(multiplyNumbers);

const calculateNumbers = filterMultiplyNumbers.map(x => x * 5);

console.log(calculateNumbers);