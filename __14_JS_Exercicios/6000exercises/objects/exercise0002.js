function myFunction(string) {
  return { key: string };
}

console.log(myFunction("a"));
console.log(myFunction("z"));
console.log(myFunction("b"));

// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

// Test Cases:

// myFunction('a')  -> Expected {key:'a'}
// myFunction('z')  -> Expected {key:'z'}
// myFunction('b')  -> Expected {key:'b'}
