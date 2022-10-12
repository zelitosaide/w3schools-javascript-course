function myFunction(str1, str2, position) {
  return position
    ? str1.slice(0, position) + str2 + str1.slice(position)
    : str2
      ? str2 + str1
      : str1
}


// Write a JavaScript function to insert a string within a string at a particular position (default is 1)


// Test Data:
console.log(myFunction("We are doing some exercises."));
console.log(myFunction("We are doing some exercises", "JavaScript "));
console.log(myFunction("We are doing some exercises", "JavaScript ", 18));

// console.log(insert('We are doing some exercises.'));                    "We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript '));      "JavaScript We are doing some exercises."
// console.log(insert('We are doing some exercises.','JavaScript ',18));   "We are doing some JavaScript exercises."



console.log(typeof Date.now)    // function
console.log(typeof [])          // object

const person = []
person["firstName"] = "Zelito";
person["lastName"] = "Saide";
person["age"] = 25;

console.log("person", JSON.stringify(person));
console.log("person", person);
console.log("length", person.length);
console.log("person[0]", person[0]);
console.log("person['age']", person['age']);

console.log("Instanceof", person instanceof Array);
console.log("Array.isArray(person)", Array.isArray(person));
console.log("Typeof", typeof person);
console.log("{} instanceof Array", {} instanceof Array);
console.log("Array.isArray({})", Array.isArray({}));


const array = [1, 2, 3, 4];
const newArray = array.concat([1, 1, 5, 6, 2]);
const newArray2 = array.concat("ola");
const newArray3 = array.concat(4, "ola");

console.log("newArray", newArray);
console.log("newArray2", newArray2);
console.log("newArray3", newArray3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const deleted = fruits.splice(2, 0, "Lemon", "Kiwi");

console.log("fruits", fruits, deleted);

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const deleted2 = fruits.splice(2, 1, "Lemon", "Kiwi");

console.log("fruits", fruits2, "deleted", deleted2);

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
const slice = fruits3.slice(-4, 1);

console.log("slice", slice);

