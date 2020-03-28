
// exercise 1
function capitalize(string) 
{
    string = string.split(" ");

    for (var i = 0, x = string.length; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }

    return string.join(" ");
}

console.log(capitalize("this should be capitalized"));

// exercise 2
function maximumOfThree(num1, num2, num3) 
 {
  value = 0;
  if (num1 > num2)
  {
    value = num1;
  } else
  {
    value = num2;
  }
  if (num3 > value) 
  {
    value = num3;
  }
  return value;
}

console.log("Max value is", maximumOfThree (1,0,1));
console.log("Max value is", maximumOfThree (0,-10,-20));
console.log("Max value is", maximumOfThree (1000,510,440));

// exercise 3
function moveLastThree(string) {
    if (string.length > 1)
      {
        return string.slice(-3) + string.slice(0, -3);
      }
 return string;
}
console.log(moveLastThree("Python"));
console.log(moveLastThree("JavaScript"));
console.log(moveLastThree("Hi"));