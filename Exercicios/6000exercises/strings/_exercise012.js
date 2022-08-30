function myFunction(str, separator = " ") {
  return str.split("")
    .map((value, index) => value === value.toUpperCase() && index !== 0 ? "-" + value.toLowerCase() : value)
    .join("")
    .split("-")
    .join(separator);
}


// Write a JavaScript function to uncamelize a string.

// Test Data:
console.log(myFunction("helloWorld"));
console.log(myFunction("helloWorld", "-"));
console.log(myFunction("helloWorld", "_"));

// console.log(myFunction('helloWorld'));         "hello world"
// console.log(myFunction('helloWorld','-'));     "hello-world"
// console.log(myFunction('helloWorld','_'));     "hello_world"