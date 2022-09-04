const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";


for(let i = 0; i < fruits.length; i++) {
  if (!fruits[i]) {
    console.log("undefined");
  } else {
    console.log("valid")
  }
}

for (let x of fruits) {
  if (!x) {
    console.log("undefined");
  } else {
    console.log("valid")
  }
}

const fruits2 = fruits.map(value => {
  if (value == undefined) return true
  else return true
});

console.log("fruits2", fruits2);

const person = [];
person["firstName"] = "Zelito";

console.log(typeof person);
console.log(person instanceof Array);
console.log(person instanceof Object);