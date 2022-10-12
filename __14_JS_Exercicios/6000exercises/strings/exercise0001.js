function myFunction(a, b) {
  const firstString = a.replace("%", "");
  const lastString = b.replace("%", "");
  return firstString.charAt(0).toUpperCase() + firstString.slice(1) + lastString.split("").reverse().join("");
}

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc


// Test Cases:
console.log(myFunction("java", "tpi%rcs"));
console.log(myFunction("c%ountry", "edis"));
console.log(myFunction("down", "nw%ot"));

// myFunction('java', 'tpi%rcs')      Expected 'Javascript'
// myFunction('c%ountry', 'edis')     Expected 'Countryside'
// myFunction('down', 'nw%ot')        Expected 'Downtown'
