function myFunction(str) {
  return str.split("")
    .map(value => value !== value.toLowerCase() ? value.toLowerCase() : value.toUpperCase())
    .join("");
}

// Write a JavaScript function that takes a string which has 
// lower and upper case letters as a parameter and converts 
// upper case letters to lower case, and lower case letters to upper case


// Test Data:
console.log(myFunction("AaBbc"));
console.log(myFunction("Zelito"));


// console.log(myFunction("AaBbc"));        "aAbBC"
// console.log(myFunction("Zelito"));     "zELITO"
