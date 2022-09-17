function myFunction(date1, date2) {
  return Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
}

console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')));

// OR
function myFunction2(a, b) {
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24
}

// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates

// Test Cases:

// myFunction(new Date('2020-06-11'), new Date('2020-06-01'))   -> Expected 10
// myFunction(new Date('2000-01-01'), new Date('2020-06-01'))   -> Expected 7457
