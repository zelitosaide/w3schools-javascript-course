function myFunction(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
  // return str.trim().charAt(0).toUpperCase() + str.trim().slice(1);
}

// Write a JavaScript function to capitalize the first letter of a string

// Test Data:
console.log(myFunction("js string exercises"));
console.log(myFunction("zelito Atumane Saide"));

// console.log(myFunction("js string exercises"));    "Js string exercises"
// console.log(myFunction("zelito Atumane Saide"));   "Zelito Atumane Saide"