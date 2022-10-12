function myFunction2(object1, object2) {
  const object = Object.entries(object2).reduce(function (obj, [key, value]) {
    if (key === "b") {
      return { ...obj, d: value };
    } else {
      return { ...obj, [key]: value };
    }
  }, {});

  return { ...object1, ...object }
}

console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));


// OR

function myFunction(object1, object2) {
  const { b, ...rest } = object2;

  return { ...object1, ...rest, d: b };
}

// function myFunction2(x, y) {
//   const { b, ...rest } = y;
//   return { ...x, ...rest, d: b };
// }


// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

// Test Cases:

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }) -> Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
// myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }) -> Expected { a: 5, b: 4, c: 3, e: 2, d: 1}
