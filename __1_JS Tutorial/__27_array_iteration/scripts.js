const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
  array[index] = value * 2;
}

console.log("Numbers:", numbers);

const sum = [12, 18, 4, 3].reduce(function(total, value, index) {
  if (value > 18) {
    return total + value;
  } else {
    return total;
  }
});

console.log("Sum:", sum);

