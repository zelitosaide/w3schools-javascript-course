function myFunction(a, n) {
  return a[n - 1]
}


// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

// Test Cases:
console.log(myFunction("abcd", 1));
console.log(myFunction("zyxbwpl", 5));
console.log(myFunction("gfedcba", 3));

// myFunction('abcd',1)       Expected 'a'
// myFunction('zyxbwpl',5)    Expected 'w'
// myFunction('gfedcba',3)    Expected 'e'
