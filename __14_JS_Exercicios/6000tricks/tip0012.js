function myFunction(number) {
  let sum = 0, i = 0, condition = true;
  for (; condition;) {
    if (i >= number) condition = !condition;
    sum = sum + i;
    i = i + 1;
  }
  return sum;
}

const output = myFunction(3);

console.log(output);   // What's output??