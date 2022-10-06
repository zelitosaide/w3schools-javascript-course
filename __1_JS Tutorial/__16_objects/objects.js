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

label05: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

  const member = {
    firstName: "Zelito Atumane Saide",
    lastName: "Abdala",
  };

  const fullName = person.fullName.bind(member);
  console.log(fullName());
}

label06: {
  const person = {
    name: "Zelito Atumane Saide Abdala",
    getPerson: function () {
      return this;
    },
    address: {
      street: "Av. Angola",
      getAddress: function () {
        return this;
      }
    },
  };

  console.log(person.getPerson());
  console.log(person.address.getAddress());
}


function fn1() {
  return function fn2() {
    return this;
  }
}

console.log(fn1()());