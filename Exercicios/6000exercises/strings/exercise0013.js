function myFunction(a, b) {
  return a === b;
}

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

// Test Cases:
console.log(myFunction(2, 3));
console.log(myFunction(3, 3));
console.log(myFunction(1, "1"));
console.log(myFunction("10", "10"));

// myFunction(2, 3)         Expected false 
// myFunction(3, 3)         Expected true 
// myFunction(1, '1')       Expected false 
// myFunction('10', '10')   Expected true 
