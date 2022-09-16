function myFunction(object) {
  // Object.keys(object).forEach(function (key) {
  //   if (key === "b") {
  //     delete object[key];
  //   }
  // });
  // return object;


  return Object.entries(object).reduce(function (obj, [key, value]) {
    // if (key === "b") {
    //   delete object[key];
    //   return obj;
    // } else {
    //   return { ...obj, [key]: value }
    // }

    if (key !== "b") {
      return { ...obj, [key]: value }
    } else {
      return obj
    }
  }, {});
}

// OR

function myFunction2(obj) {
  const { b, ...rest } = obj;
  return rest;
}

console.log(myFunction({ a: 1, b: 7, c: 3 }));
console.log(myFunction({ b: 0, a: 7, d: 8 }));
console.log(myFunction({ e: 6, f: 4, b: 5, a: 3 }));



// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

// Test Cases:

// myFunction({ a: 1, b: 7, c: 3 })         -> Expected { a: 1, c: 3 }
// myFunction({ b: 0, a: 7, d: 8 })         -> Expected { a: 7, d: 8 }
// myFunction({ e: 6, f: 4, b: 5, a: 3 })   -> Expected { e: 6, f: 4, a: 3 }
