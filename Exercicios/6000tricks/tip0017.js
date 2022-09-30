function myFunction(arg) {
  const keys = [];
  for (const key of arg) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction("JavaScript");

console.log(output);  // What's output??