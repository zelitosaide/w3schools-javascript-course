label01: {
  console.log("John".constructor);
  console.log((3.14).constructor);
  console.log(false.constructor);
  console.log([1, 2, 3, 4].constructor);
  console.log({ name: "John", age: 34 }.constructor);
  console.log(new Date().constructor);
  console.log(function () { }.constructor);
}