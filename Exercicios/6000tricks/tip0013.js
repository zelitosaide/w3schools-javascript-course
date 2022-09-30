function myFunction(arg) {
  let sum = 0;
  for (let i = 0; arg[i]; i++) {
    sum = sum + arg[i];
  }
  return sum;
}

const output = myFunction([1, 2, 3]);

console.log(output);  // What's output??