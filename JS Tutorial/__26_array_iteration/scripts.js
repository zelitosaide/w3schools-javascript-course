const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
  array[index] = value * 2;
}

console.log("Numbers:", numbers);