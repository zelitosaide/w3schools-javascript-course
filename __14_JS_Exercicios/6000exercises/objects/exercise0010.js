function myFunction(object) {
  return Object.entries(object).reduce(function (obj, [key, value]) {
    if (!value.trim()) {
      return { ...obj, [key]: null };
    } else {
      return { ...obj, [key]: value };
    }
  }, {});
}

// OR

function myFunction2(obj) {
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
}

console.log(myFunction({ a: 'a', b: 'b', c: '' }));
console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }));
console.log(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }));

// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

// Tests Cases:

// myFunction({ a: 'a', b: 'b', c: '' })          -> Expected { a: 'a', b: 'b', c: null }
// myFunction({ a: '', b: 'b', c: ' ', d: 'd' })  -> Expected { a: null, b: 'b', c: null, d: 'd' }
// myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }) -> Expected { a: 'a', b: 'b ', c: null, d: null }
