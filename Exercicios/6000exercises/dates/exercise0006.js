function myFunction(date1, date2) {
  return Math.abs(date1 - date2) / (1000 * 60 * 60) <= 1;
}

// OR
function myFunction2(a, b) {
  return Math.abs(a - b) / 1000 / 60 <= 60
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));



// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise

// Test Cases:

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) Expected true
// myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')) Expected true
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')) Expected false
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')) Expected true 
