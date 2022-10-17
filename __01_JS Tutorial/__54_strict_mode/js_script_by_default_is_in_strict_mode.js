label01: {
  try {
    x = 3.14;
  } catch (error) {
    console.log(error.message);
  }
}

label02: {
  try {
    myFunction();
  } catch (error) {
    console.log(error.message);
  }

  function myFunction() {
    y = 3.14;
  }
}

label03: {
  try {
    x = { p1: 10, p2: 20 };
  } catch (error) {
    console.log(error.message);
  }
}

label04: {
  try {
    // let x = 3.14;
    // delete x;
  } catch (error) {
    console.log(error.message);
  }
}

label05: {
  try {
    // function x() { };
    // delete x;
  } catch (error) {
    console.log(error.message);
  }
}

label06: {
  try {
    // function x(p1, p1) { };
  } catch (error) {
    console.log(error.message);
  }
}

label07: {
  try {
    // let x = 010;
  } catch (error) {
    console.log(error.message);
  }
}

label08: {
  try {
    // let x = "\010";
  } catch (error) {
    console.log(error.message);
  }
}

label09: {
  const obj = {};
  Object.defineProperty(obj, "x", {
    value: 10,
    writable: false
  });

  try {
    obj.x = 3.14;
  } catch (error) {
    console.log(error.message);
  }
}

label10: {
  const obj = {
    get x() {
      return 0;
    }
  };

  try {
    obj.x = 3.14;
  } catch (error) {
    console.log(error.message);
  }
}

label11: {
  try {
    delete Object.prototype;
  } catch (error) {
    console.log(error.message);
  }
}

label12: {
  try {
    // let eval = 3.14;
  } catch (error) {
    console.log(error.message);
  }
}

label13: {
  try {
    // let arguments = 3.14;
  } catch (error) {
    console.log(error.message);
  }
}

label14: {
  try {
    // with (Math) { x = cos(2) };
  } catch (error) {
    console.log(error.message);
  }
}

label15: {
  try {
    eval("x = 2");
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }
}

label16: {
  try {
    eval("var x = 2;");
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }
}

label17: {
  try {
    eval("let x = 2;");
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }
}

label18: {
  function myFunction() {
    return this;
  }
  console.log(myFunction() === undefined);
}

label19: {
  try {
    // let private = 1500;
  } catch (error) {
    console.log(error.message);
  }
}