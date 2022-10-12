function myFunction(set1, set2) {
  set1.forEach(function (value) {
    if (!set2.has(value)) {
      set1.delete(value);
    }
  });
  return set1;
}

console.log(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6])));
console.log(myFunction(new Set('12345'), new Set([...'45678'])));
console.log(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4])));

// OR

function myFunction2(a, b) {
  const int = new Set();
  a.forEach(el => b.has(el) && int.add(el));
  return int;
}


// Write a function that takes two sets (a and b) as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in a as well as b

// Test Cases:

// myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))     -> Expected new Set()
// myFunction(new Set('12345'), new Set([...'45678']))    -> Expected new Set('45')
// myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))     -> Expected new Set([2, 3])
