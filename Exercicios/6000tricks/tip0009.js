function myFunction(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

const output = myFunction(4);

console.log(output);   // What's output??