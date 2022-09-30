function myFunction(arg) {
  const keys = [];
  for (const key of arg) {
    keys.push(key);
  }
  return keys;
}

const output = myFunction(["BMW", "Volvo", "Mini"]);

console.log(output);        // What's output??