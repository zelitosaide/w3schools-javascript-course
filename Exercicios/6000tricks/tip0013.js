function myFunction(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction({
  firstName: "John", 
  lastName: "Doe",
  age: 25
});

console.log(output);  // What's output??