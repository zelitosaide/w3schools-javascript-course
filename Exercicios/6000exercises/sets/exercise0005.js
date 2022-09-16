function myFunction(value1, value2, value3) {
  return new Set([value1, value2, value3]);
}

console.log(myFunction(1, 'b', 3));
console.log(myFunction(NaN, null, false));
console.log(myFunction('a', ['b'], { c: 3 }));


// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

// Test Cases:

// myFunction(1, 'b', 3)              Expectednew   -> Set([1, 'b', 3])
// myFunction(NaN, null, false)       Expectednew   -> Set([NaN, null, false])
// myFunction('a', ['b'], { c: 3 })   Expectednew   -> Set(['a', ['b'], { c: 3 }])


function myFunction2(a, b, c) {
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
}
