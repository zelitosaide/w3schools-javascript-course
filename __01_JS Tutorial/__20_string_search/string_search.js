label01: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.indexOf("locate");
  console.log(result);
}

label02: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.lastIndexOf("locate");
  console.log(result);
}

label03: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.lastIndexOf("John");
  console.log(result);
}

label04: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.indexOf("locate", 15);
  console.log(result);
}

label05: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.lastIndexOf("locate", 15);
  console.log(result);
}

label06: {
  let string = "Please locate where 'locate' occurs!";
  const result = string.search("locate");
  console.log(result, "search()");
}

label07: {
  let string = "The rain in SPAIN stays mainly in the plain";
  const result = string.match(/ain/g);
  console.log(result);
}

label08: {
  let string = "The rain in SPAIN stays mainly in the plain";
  const result = string.match(/ain/gi);
  console.log(result);
}

label09: {
  let string = "The rain in SPAIN stays mainly in the plain";
  const result = string.includes("rain");
  console.log(result);
}

label10: {
  let string = "Hello world, welcome to the universe.";
  const result = string.includes("world", 12);
  console.log(result);
}


label11: {
  let string = "Hello world, welcome to the universe.";
  const result = string.startsWith("Hello");
  console.log(result, "starts with");
}

label12: {
  let string = "John Doe";
  const result = string.endsWith("Doe");
  console.log(result);
}

label13: {
  let string = "Hello world, welcome to the universe.";
  const result = string.endsWith("world", 11);
  console.log(result, "finished");
}