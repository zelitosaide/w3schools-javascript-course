function myFunction(str1, str2) {
  return { [str1]: str2 };
}

console.log(myFunction("a", "b"));
console.log(myFunction("z", "x"));
console.log(myFunction("b", "w"));

// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

// Test Cases:

// myFunction('a','b')  ->  Expected {a:'b'}
// myFunction('z','x')  ->  Expected {z:'x'}
// myFunction('b','w')  ->  Expected {b:'w'}
