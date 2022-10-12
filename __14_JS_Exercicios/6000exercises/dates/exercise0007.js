function myFunction(date1, date2) {
  return date1 < date2;
}

console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
console.log(myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')));
console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

// Write a function that takes two date instances (a and b) as arguments
// It should return true if a is earlier than b
// It should return false otherwise

// Test Cases:

// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))   -> Expected true
// myFunction(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00'))   -> Expected false
// myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))   -> Expected false 
