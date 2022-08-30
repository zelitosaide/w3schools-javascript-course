function myFunction(str) {
  // return str.trim().split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
  return str.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join(" ");
}

// Write a JavaScript function to capitalize the first letter of each word in a string.

// Test Data:
console.log(myFunction("zelito atumane saide"));
console.log(myFunction("js string exercises"));

// console.log(myFunction("zelito atumane saide"));         "Zelito Atumane Saide"
// console.log(myFunction("js string exercises"));    "Js String Exercises"