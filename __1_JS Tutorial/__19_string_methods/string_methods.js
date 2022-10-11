import { text, text2, text3 } from "./data.js";

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
