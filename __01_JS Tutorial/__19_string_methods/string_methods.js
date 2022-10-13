import {
  text,
  text2,
  text3,
  textWithWhiteSpaces
} from "./data.js";

label01: {
  let part = text.slice(7, 13);
  console.log(part);
}

label02: {
  let part = text.slice(-12, -6);
  console.log(part);
}

label03: {
  let part = text.slice(7);
  console.log(part);
}

label04: {
  let part = text.slice(-12);
  console.log(part);
}

lebel05: {
  let part = text.substring(7);
  console.log(part);
}

label06: {
  let part = text.substr(7, 6); // deprecated
  console.log(part);
}

label07: {
  let part = text.substr(7);
  console.log(part);
}

label08: {
  let part = text.substr(-4);
  console.log(part);
}

label09: {
  let newText = text2.replace("Microsoft", "W3Schools");
  console.log(newText);
}

label10: {
  let newText = text3.replace("Microsoft", "W3Schools");
  console.log(newText);
}

label11: {
  let newText = text2.replace("MICROSOFT", "W3Schools");
  console.log(newText, "===");
}

label12: {
  let newText = text2.replace(/MICROSOFT/i, "W3Schools");
  console.log(newText, "---");
}

label13: {
  let newText = text3.replace(/MICROSOFT/gi, "W3Schools");
  console.log(newText);
}

label14: {
  let upperCaseString = text.toUpperCase();
  console.log(upperCaseString);
}

label15: {
  let lowerCaseString = text.toLowerCase();
  console.log(lowerCaseString);
}

label16: {
  let newText = textWithWhiteSpaces.trim();
  console.log(newText);
}

label17: {
  let newText = textWithWhiteSpaces.trimStart();
  console.log(newText, "ola");
}

label18: {
  let newText = textWithWhiteSpaces.trimEnd();
  console.log(newText);
}

label19: {
  let text = "5";
  let padded = text.padStart(4, "x");
  console.log(padded);
}

label20: {
  let text = "5";
  let padded = text.padStart(4, "0");
  console.log(padded);
}

label21: {
  let numb = 5;
  let text = numb.toString();
  let padded = text.padStart(4, "0");
  console.log(padded);
}

label22: {
  let text = "5";
  let padded = text.padEnd(4, "x");
  console.log(padded);
}

label23: {
  let text = "5";
  let padded = text.padEnd(4, "0");
  console.log(padded);
}

label24: {
  let numb = 5;
  let text = numb.toString();
  let padded = text.padEnd(4, "0");
  console.log(padded);
}

label25: {
  let text = "HELLO WORLD";
  let char = text.charAt(0);
  console.log(char);
}

label26: {
  let text = "HELLO WORLD";
  let char = text.charCodeAt(0);
  console.log(char);
}

label27: {
  try {
    let text = "HELLO WORLD";
    text[0] = "A";
  } catch (error) {
    console.log(error.name);
  }
}

label28: {
  let text = "ECMA";
  console.log(text.split(""));
  console.log(text.split());
  console.log([...text]);
}