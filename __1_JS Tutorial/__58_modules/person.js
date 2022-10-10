const name = "Jesse";
const age = 40;

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

export default function welcome() {
  return "Welcome to person.js!!";
}

export const fullName = person.fullName.bind(person);

export { person };

export { name, age };