label01: {
  let option = "1";

  if (option === "2"); {
    console.log("Thank you!");
  }
}

label02: {
  function myFunction(a) {
    let power = 10;
    return
    a * power;
  }

  console.log(myFunction(10) === undefined);
}

label03: {
  const person = [];
  person["firstName"] = "John";
  console.log(person);
}

label04: {
  const points = [40, 100, 1, 5, 25, 10,];
  const person = { firstName: "John", lastName: "Doe", age: 46, };
}

label05: {
  let obj;
  console.log(typeof obj === "undefined");
  console.log(obj !== null, obj === null);
}

label06: {
  const obj = {};

  console.log("Case 1:", obj !== null && typeof obj !== "undefined");
  console.log("Case 2:", typeof obj !== "undefined" && obj !== null);
  console.log(obj === null);
}