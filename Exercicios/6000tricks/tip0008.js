function myFunction(option) {
  let text = "";
  switch(option) {
    case 0: 
      text = "Off";
      break;
    case 1: 
      text = "On";
      break;
    default: 
      text = "No value found";
  }
  return text;
}

const output = myFunction("1");

console.log(output);  // What's output??