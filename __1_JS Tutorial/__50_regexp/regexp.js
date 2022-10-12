label01: {
  let text = "What is your name?";
  const result = text.match(/[wan]/gi);
  console.log(result);
}

label02: {
  let text = "123456789";
  const result = text.match(/[1-3]/g);
  console.log(result);
}

label03: {
  let text = "re, green, red, green, gren, gr, blue, yellow";
  const result = text.match(/(red|green)/g);
  console.log(result);
  console.log(text.match(/red|green/g));
  console.log("Zelito Atumane Saide".match(/a|e/g));
  console.log("Zelito Atumane Saide".match(/(a|e)/g));
}

label04: {
  let text = "Visit W3Schools";
  const result = text.match(/w3schools/i);
  console.log(result);
}

label05: {
  let text = "Is this all there is?";
  const result = text.match(/is/g);
  console.log(result);
}

label06: {
  let text = "\nIs th\nis all there i\ns?";
  console.log(text);
  const result = text.match(/is/m);
  console.log(result);
}

label07: {
  let text = "Give 100%!";
  const result = text.match(/\d/g);
  console.log(result);
}

label08: {
  let text = "What is your name?";
  const result = text.match(/\s/g);
  console.log(result);
}

label09: {
  let text = "HELLO, LOOK AT YOU!";
  const result = text.match(/\bLO/);
  console.log(result);
}

label10: {
  let text = "HELLO, LOOK AT YOU!";
  const result = text.match(/LO\b/);
  console.log(result);
}

label11: {
  let text = "Visit W3Schools. Hello World!";
  const result = text.match(/\u0057/g);
  console.log(result, "W".charCodeAt(0).toString(16));
}