function myFunction(number) {
  let sum = 0, i = 0;
  for (; false;) {
    if (i > number) break;
    sum = sum + i;
    i = i + 1;
  }
  return sum;
}

const output = myFunction(5);

console.log(output);   // What's output??