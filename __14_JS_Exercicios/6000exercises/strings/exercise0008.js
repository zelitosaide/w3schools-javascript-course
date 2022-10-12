function myFunction(a) {
  return a.slice(0, a.length / 2);
}

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result

// Test Cases:
console.log(myFunction("abcdefgh"));
console.log(myFunction("1234"));
console.log(myFunction("gedcba"));


// myFunction('abcdefgh')   Expected 'abcd'
// myFunction('1234')       Expected '12'
// myFunction('gedcba')     Expected 'ged'
