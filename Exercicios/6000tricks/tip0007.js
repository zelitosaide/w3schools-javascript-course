function myFunction(option) {
  let text = "";
  switch(option) {
    case 1: text += "Então ";
    case 2: text += "Qual É ";
    case 3: text += "O Seu ";
    case 4: text += "Nome?";
  }
  return text;
}

const output = myFunction(2);

console.log(output);  // What's output??