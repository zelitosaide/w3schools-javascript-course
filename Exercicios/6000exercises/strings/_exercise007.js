function myFunction(str) {
  // return str.trim().toLowerCase().split(" ").join("-").replace(".", "");
  return str.toLowerCase().split(" ").join("-").replace(/\./g, "");
}

// Write a JavaScript function to parameterize a string.

// Test Data:
console.log(myFunction("Robin Singh from USA....."));
console.log(myFunction("Zelito Atumane Saide"));

// console.log(myFunction("Robin Singh from USA......"));     "robin-singh-from-usa"
// console.log(myFunction("Zelito Atumane Saide"))            "zelito-atumane-saide"