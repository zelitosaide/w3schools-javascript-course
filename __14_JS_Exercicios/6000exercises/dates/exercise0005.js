function myFunction(date1, date2) {
  return date1.getTime() === date2.getTime();
}

// OR
function myFunction(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
}

console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/01')));
console.log(myFunction(new Date('2000/01/01'), new Date('2000/01/02')));
console.log(myFunction(new Date('2001/01/01'), new Date('2000/01/01')));
console.log(myFunction(new Date('2000/11/01'), new Date('2000/01/01')));

// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise

// Test Cases:

// myFunction(new Date('2000/01/01'), new Date('2000/01/01'))   -> Expected true
// myFunction(new Date('2000/01/01'), new Date('2000/01/02'))   -> Expected false
// myFunction(new Date('2001/01/01'), new Date('2000/01/01'))   -> Expected false
// myFunction(new Date('2000/11/01'), new Date('2000/01/01'))   -> Expected false 


