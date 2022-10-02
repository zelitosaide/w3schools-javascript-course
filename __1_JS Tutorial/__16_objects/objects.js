label01: {
  const car = {
    type: "Fiat",
    model: "500",
    color: "white"
  };
  console.table(car);
}

label02: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.table(person);
}

label03: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person.firstName, person["firstName"]);
}

label04: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
    // OR
    // fullName() {
    //   return this.firstName + " " + this.lastName;
    // }
  };

  person.getId = function () {
    return this.id;
  }

  console.log(person.fullName(), person.getId());
}