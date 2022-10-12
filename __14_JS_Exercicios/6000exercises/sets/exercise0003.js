function myFunction(set1, set2) {
  set2.forEach(function (value) {
    set1.add(value);
  });

  return set1;
}

console.log(myFunction(new Set('123'), new Set('234')));
console.log(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log(myFunction(new Set([false, false, NaN]), new Set([true, true, NaN])));

// OR

function myFunction2(a, b) {
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
}



// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

// Test Cases:

// myFunction(new Set('123'), new Set('234'))                             -> Expected new Set('1234')
// myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))                     -> Expected new Set([1, 2, 3, 4, 5])
// myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))   -> Expected new Set([false, NaN, true])
