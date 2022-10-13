label01: {
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function () {
      return this;
    }
  };

  console.table(person.myFunction().myFunction().myFunction().firstName);
}