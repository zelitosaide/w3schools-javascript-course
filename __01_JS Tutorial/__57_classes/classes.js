label01: {
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    printName = function () {
      console.log(this.name);
    }

    printYear() {
      console.log(this.year);
    }
  }

  const myCar = new Car("Ford", 2014);
  myCar.printName();
  myCar.printYear();
}