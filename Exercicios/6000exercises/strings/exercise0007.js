function myFunction(a) {
  return a.slice(0, -3);
}

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

// Test Cases:
console.log(myFunction("abcdefg"));
console.log(myFunction("1234"));
console.log(myFunction("fgedcba"));

// myFunction('abcdefg')  Expected 'abcd'
// myFunction('1234')     Expected '1'
// myFunction('fgedcba')  Expected 'fged'
