function myFunction() {
  const cars = ["BMW", null, "Volvo", "Saab", "Ford"];
  let text = "My Favorites cars are: ";
  let i = 0;
  while (cars[i]) {
    text += cars[i];
    i = i + 1;
  }
  return text;
}

const output = myFunction();

console.log(output);