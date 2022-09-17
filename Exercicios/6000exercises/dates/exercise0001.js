function myFunction(date, number) {
  return date.setDate(date.getDate() + number);
}

console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 31));
console.log(myFunction(new Date(Date.UTC(2000, 01, 01)), 10));
console.log(myFunction(new Date(Date.UTC(2000, 02, 28)), 2));

// OR
function myFunction2(a, b) {
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
}

// Write a function that takes as argument a date instance (a) and a number (b)
// It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC

// Test Cases:

// myFunction(new Date(Date.UTC(2000,01,01)), 31)   ->  Expected 952041600000
// myFunction(new Date(Date.UTC(2000,01,01)), 10)   ->  Expected 950227200000
// myFunction(new Date(Date.UTC(2000,02,28,)), 2)   ->  Expected 954374400000
