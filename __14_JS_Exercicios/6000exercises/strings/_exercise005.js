function myFunction(str) {
  const stringArray = str.split(" ");

  return stringArray.length > 1 ? stringArray[0] + " " + stringArray[1].charAt(0) + "." : str;
}

// Write a JavaScript function to convert a string in abbreviated form.

// Test Data:
console.log(myFunction("Zelito Atumane Saide"));
console.log(myFunction("Zelito"));

// console.log(myFunction("Robin Singh"));     "Robin S."
// console.log(myFunction("Robin"));           "Robin"