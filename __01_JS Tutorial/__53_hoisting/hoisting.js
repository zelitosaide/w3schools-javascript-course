label01: {
  x = 5;
  console.log(x);
  var x;
}

label02: {
  var x;
  x = 5;
  console.log(x);
}

label03: {
  try {
    carName = "Volvo";
    console.log(carName);
    let carName;
  } catch (error) {
    console.log(error.name);
  }
}

label04: {
  try {
    // carName = "Volvo";
    // console.log(carName);
    // const carName;
  } catch (error) {
    console.log(error.name);
  }
}

label05: {
  var x = 5;
  var y = 7;
  console.log(x, y);
}

label06: {
  var a = 5;
  console.log(a, b);
  var b = 7;
}

label07: {
  var c = 5;
  var d;
  console.log(c, d);
  d = 7;
}

// Resume

label08: {
  person = "Zelito";
  console.log(person);
  var person;
}

label09: {
  console.log(animal);
  var animal = "horse";
}

label10: {
  var city;
  console.log(city);
  city = "New York";
}

// Declarations are hoisted not initializations!!