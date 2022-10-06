label01: {
  const hello = () => console.log("Hello World!");
  console.log(hello());
}

label02: {
  const hello = () => "Hello World!";
  console.log(hello());
}

lable03: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
      return this;
    },
    whoIsThis: () => {
      return this.firstName;
    },
  };
  console.log("whoIsThis", person.whoIsThis());

  const whoIsThis = () => this;
  console.log(whoIsThis());
}

label4: {
  const hello = function () {
    return this;
  }
  // console.log(hello());

  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: hello
  }

  console.log(person.fullName());
}


// (function () {
//   console.log(this);
// })();


function println() {
  // console.log(this);
}

println();
