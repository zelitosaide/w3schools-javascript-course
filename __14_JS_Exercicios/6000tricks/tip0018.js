function myFunction(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction("John");

console.log(output);  // What's output??