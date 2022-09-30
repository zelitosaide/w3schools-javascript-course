function myFunction(arg) {
  const items = [];
  for (const item of arg) {
    items.push(item);
  }
  return items;
}

const output = myFunction(["BMW", "Volvo", "Mini"]);

console.log(output);        // What's output??