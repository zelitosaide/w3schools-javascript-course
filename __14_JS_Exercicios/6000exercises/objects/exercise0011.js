function myFunction(object) {
  return object["prop-2"];
}

console.log(myFunction({ one: 1, 'prop-2': 2 }));
console.log(myFunction({ 'prop-2': 'two', prop: 'test' }));


// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

// Test Cases:

// myFunction({  one: 1,  'prop-2': 2})             -> Expected 2
// myFunction({  'prop-2': 'two',  prop: 'test'})   -> Expected 'two'
