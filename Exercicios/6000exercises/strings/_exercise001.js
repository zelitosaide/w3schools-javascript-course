function myFunction(a) {
  return typeof a === 'string';
}


// Write a JavaScript function to check whether an `input` is a string or not.

// Test Data:
console.log(myFunction("w3resource"));
console.log(myFunction([1, 2, 4, 0]));
console.log(myFunction({ name: "Z"}));
console.log(myFunction(12));

// console.log(myFunction('w3resource')); true
// console.log(myFunction([1, 2, 4, 0])); false