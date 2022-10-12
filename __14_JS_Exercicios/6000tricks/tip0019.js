function myFunction(object) {
  const keys = [];
  for (const key in object) {
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