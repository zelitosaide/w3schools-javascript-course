lable1: {
  let length = 16;
  let lastName = "Johnson";
  let object = {
    firstNam: "John",
    lastName: "Doe"
  };
  console.log(typeof length, typeof lastName, typeof object);
}

label2: {
  let x = 16 + "Volvo";
  let y = 16 + 4 + "Volvo";
  let z = "Volvo" + 16 + 4;
  console.log(x, y, z);
}

label3: {
  let x;
  console.log(x);
  x = 5;
  console.log(x);
  x = "John";
  console.log(x);
}

label4: {
  let carName1 = "Volvo XC60";
  let carName2 = 'Volvo XC60';
  console.log(carName1, carName2);

  let answer1 = "It's alright";
  let answer2 = "He is called 'Johnny'";
  let answer3 = 'He is called "Johnny"';
  console.log(answer1, answer2, answer3);
}

label6: {
  let x1 = 34.000;
  let x2 = 34;
  console.log(x1, x2);

  let x = 12e3;
  let y = 12e-3;
  console.log(x, y);
}

label6: {
  let x = 5;
  let y = 5;
  let z = 6;
  console.log(x == y);
  console.log(x == z);
}

label7: {
  const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars, cars[0]);
}

label8: {
  const age = Symbol("age");
  const eyeColor = Symbol("eyeColor");
  const person = {
    firstName: "John",
    lastName: "Doe",
    [eyeColor]: "blue",
    [age]: 50
  };

  console.table(person);
}

label9: {
  console.log(typeof "");
  console.log(typeof "John");
  console.log(typeof "John Doe");

  console.log(typeof 0);
  console.log(typeof 314);
  console.log(typeof 3.14);
  console.log(typeof (3));
  console.log(typeof (3 + 4));
}

label10: {
  let car;
  console.log(typeof car, car);
  car = "Volvo";
  console.log(car);
  car = undefined;
  console.log(car);
}

label11: {
  let car = "";
  console.log(typeof car, car);
}