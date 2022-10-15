label01: {
  label02: {
    const x = 2;
  }
  try {
    console.log(x);
  } catch (error) {
    console.log(error.message);
  }
}

label03: {
  label04: {
    var y = 2;
  }
  console.log(y);
}

label05: {
  console.log(y);
}

label06: {
  try {
    console.log(carName);    // code here can NOT use carName    
  } catch (error) {
    console.log(error.message);
  }

  function myFunction() {
    let carName = "Volvo";
    console.log(carName.message);   // code here CAN carName
  }

  try {
    console.log(carName);   // code here can NOT use carName
  } catch (error) {
    console.log(error.message);
  }
}