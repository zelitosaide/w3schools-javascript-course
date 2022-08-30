function myFunction(a) {
  return a.toString().split("").map(value => Number(value));
}

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

// Test Cases:
console.log(myFunction(123));
console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));

// myFunction(10)       Expected [1, 0]
// myFunction(931)      Expected [9, 3, 1]
// myFunction(193278)   Expected [1, 9, 3, 2, 7, 8]

