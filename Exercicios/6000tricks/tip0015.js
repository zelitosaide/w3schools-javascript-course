function myFunction(object) {
  let keys = [];
  for (let key in object) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction("John");

console.log(output);  // What's output??