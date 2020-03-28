var values = [1, 60, 34, 30, 20, 5];

let lessThan20 = (val) => {
    return val < 20;
}

let filterLessThan20 = values.filter(lessThan20);

console.log(filterLessThan20);