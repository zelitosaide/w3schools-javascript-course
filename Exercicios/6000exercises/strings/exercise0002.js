function myFunction(a, b) {
  let result = [];
  let rest = a;

  do {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  } while(rest.length)

  return result.reverse().join(b);
}


// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// Test Cases:
console.log(myFunction("ABCDEFGHIJKLMNOPQRSTUVWYXZ", "."));
console.log(myFunction("1234567", "."));
console.log(myFunction("abcde", "$"));
console.log(myFunction("zxyzxyzxyzxyzxyz", "w"));

// myFunction('1234567','.')            Expected '1.234.567'
// myFunction('abcde','$')              Expected 'ab$cde'
// myFunction('zxyzxyzxyzxyzxyz','w')   Expected 'zwxyzwxyzwxyzwxyzwxyz'