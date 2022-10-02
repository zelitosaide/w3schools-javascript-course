label01: {
  function myFunction(p1, p2) {
    return p1 * p2;
  }
  console.log(myFunction(10, 2));
}

label02: {
  function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
  console.log(toCelsius(77));
  console.log(toCelsius);
}

label03: {
  let x = toCelsius(77);
  console.log("The temperature is " + x + " Celsius");
  console.log("The temperature is " + toCelsius(77) + " Celsius");
}

label04: {
  function localVariables() {
    var carName = "Volvo";
  }
  myFunction()
  // console.log(carName); // here can NOT use carName
}