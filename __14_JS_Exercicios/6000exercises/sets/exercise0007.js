function myFunction(set, value) {
  set.delete(value);
  return set;
}

console.log(myFunction(new Set([1, 2, 3]), 1));
console.log(myFunction(new Set('12345'), '3'));
console.log(myFunction(new Set([1, 2, 3]), 4));

// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

// Test Cases:

// myFunction(new Set([1, 2, 3]), 1)    -> Expected new Set([2, 3])
// myFunction(new Set('12345'), '3')    -> Expected new Set(['1', '2', '4', '5'])
// myFunction(new Set([1, 2, 3]), 4)    -> Expected new Set([1, 2, 3])
