function myFunction(str) {
  return str.split(" ").map(value => value.charAt(0).toUpperCase() + value.slice(1)).join("");
}

// Write a JavaScript function to convert a string into camel case

// Test Data:
console.log(myFunction("JavaScript Exercises"));
console.log(myFunction("JavaScript exercises"));
console.log(myFunction("JavaScriptExercises"));
console.log(myFunction("first name"));
console.log(myFunction("last name"));

// console.log(myFunction("JavaScript Exercises"));     "JavaScriptExercises"
// console.log(myFunction("JavaScript exercises"));     "JavaScriptExercises"
// console.log(myFunction("JavaScriptExercises"));      "JavaScriptExercises"
// console.log(myFunction("first name"));               "FirstName"
// console.log(myFunction("last name"));                "LastName"


