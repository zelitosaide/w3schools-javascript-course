function myFunction(array) {
  return array.reduce(function (object, value, index, arr) {
    // const count = arr.reduce(function (total, val) {
    //   if (value === val) {
    //     return ++total;
    //   } else {
    //     return total;
    //   }
    // }, 0);

    // OR
    const count = arr.filter(function (val) {
      return val === value
    }).length;

    return { ...object, [value]: count };
  }, {});
}


// OR 
function myFunction2(a) {
  return a.reduce((acc, cur) => {
    return { ...acc, [cur]: (acc[cur] || 0) + 1 };
  }, {});
}

console.log(myFunction([1, 2, 2, 3]));
console.log(myFunction([9, 9, 9, 99]));
console.log(myFunction([4, 3, 2, 1]));


// Write a function that takes an array of numbers as argument
// Convert the array to an object
// It should have a key for each unique value of the array
// The corresponding object value should be the number of times the key occurs within the array

// Test Cases:

// myFunction([1,2,2,3])    -> Expected {1:1,2:2,3:1}
// myFunction([9,9,9,99])   -> Expected {9:3,99:1}
// myFunction([4,3,2,1])    -> Expected {1:1,2:1,3:1,4:1}
