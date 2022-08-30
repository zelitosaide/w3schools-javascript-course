function myFunction(str) {
  const array = str.split("").map(value => String.fromCharCode(value.charCodeAt() + 1));
  return array.join("");
}

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// Test Cases:
console.log(myFunction("bnchmf"));
console.log(myFunction("bgddrd"));
console.log(myFunction("sdrshmf"));

// myFunction('bnchmf')     Expected 'coding'
// myFunction('bgddrd')     Expected 'cheese'
// myFunction('sdrshmf')    Expected 'testing'