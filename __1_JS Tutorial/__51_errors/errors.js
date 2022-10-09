label01: {
  try {
    println("ola");
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }

  console.log("Something happened");
}

label02: {
  try {
    if (2 > 1) {
      throw "Too big";
    }
  } catch (error) {
    console.log(error === "Too big");
  }
}

label03: {
  try {
    if (!isNaN(500)) {
      throw 500;
    }
  } catch (error) {
    console.log(error === 500);
  }
}

label03: {
  try {
    const admin = false;
    if (!admin) {
      throw {
        name: "AuthenticationError",
        message: "Access not granted"
      };
    }
  } catch ({ name, message }) {
    console.log(name, message);
  }
}

label04: {
  let num = 1;
  try {
    num.toPrecision(500);
  } catch (error) {
    console.log(error.name);
  }
}

label05: {
  let x = 5;
  try {
    x = y + 1;
  } catch (error) {
    console.log(error.name);
  }
}

label06: {
  try {
    // eval("alert('ola)");
    eval("console.log(;");
    // console.log(;
  } catch (error) {
    console.log(error.name);
  }
}

label07: {
  let num = 1;
  try {
    num.toUpperCase();
  } catch (error) {
    console.log(error.name);
  }
}

label08: {
  try {
    decodeURI("%%%");
  } catch (error) {
    console.log(error.name);
  }
}

label09: {
  try {
    const error = new Error("Something went wrong");
    error.name = "AuthenticationError";
    console.log(error.name);
  } catch (error) {
    console.log(error, "Ola");
  }
}

label10: {
  try {
    const admin = false;
    if (!admin) {
      throw new Error("Permission not granted");
    }
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
}