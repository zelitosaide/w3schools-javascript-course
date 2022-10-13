const name = "Jesse";
const age = 40;

export { name, age };

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

export { person };

export const fullName = person.fullName.bind(person);

export default function welcome() {
  return "Welcome to person.js!!";
}