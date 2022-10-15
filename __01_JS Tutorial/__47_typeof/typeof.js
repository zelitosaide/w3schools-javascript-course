label01: {
  console.log("John".constructor);
  console.log((3.14).constructor);
  console.log(false.constructor);
  console.log([1, 2, 3, 4].constructor);
  console.log({ name: "John", age: 34 }.constructor);
  console.log(new Date().constructor);
  console.log(function () { }.constructor);
}

label02: {
  function isArray1(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
  }
  console.log(isArray1([1, 2, 3, 4]));

  function isArray2(myArray) {
    return myArray.constructor === Array;
  }
  console.log(isArray2([1, 2, 4, 3]));
}

label03: {
  function isDate1(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
  }
  console.log(isDate1(new Date()));

  function isDate2(myDate) {
    return myDate.constructor === Date;
  }
  console.log(isDate2(new Date()));
}

label04: {
  const person = null;
  try {
    console.log(person.name);
  } catch (error) {
    console.log(error.type);
  }
}

label05: {
  const cars = ["Saab", "Volvo", "BMW"];

  console.log(cars instanceof Array);
  console.log(cars instanceof Object);
  console.log(cars instanceof String);
  console.log(cars instanceof Number);
}

label06: {
  const person = void (2 + 4);
  console.log(person);
}