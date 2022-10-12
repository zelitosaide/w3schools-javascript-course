function myFunction(a, b) {
  return a.indexOf(b) > 0 ? b + a : a + b;
}

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation


// Test Cases:
console.log(myFunction("cheese", "cake"));
console.log(myFunction("lips", "s"));
console.log(myFunction("Java", "Script"));
console.log(myFunction(" think, therefore I am", "I"));

// myFunction('cheese', 'cake')                   Expected 'cheesecake'
// // myFunction('lips', 's')                     Expected 'slips'
// // myFunction('Java', 'script')                Expected 'Javascript'
// // myFunction(' think, therefore I am', 'I')   Expected 'I think, therefore I am'
