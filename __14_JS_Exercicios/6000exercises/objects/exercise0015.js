function myFunction(object, string) {
  return !!object[string];
}

// OR

function myFunction2(a, b) {
  return Boolean(a[b]);
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: null, z: 'c' }, 'y'));
console.log(myFunction({ x: 'a', b: 'b', z: undefined }, 'z'));

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

// Test Cases:

// myFunction({a:1,b:2,c:3},'b')                -> Expected true
// myFunction({x:'a',y:null,z:'c'},'y')         -> Expected false
// myFunction({x:'a',b:'b',z:undefined},'z')    -> Expected false
