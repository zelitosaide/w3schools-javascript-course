function myFunction(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction([
  { name: "John Doe", age: 20 },
  { name: "Doe Iris", age: 12 },
  { name: "Dalton Lee", age: 27 },
]);

console.log(output);  // What's output??