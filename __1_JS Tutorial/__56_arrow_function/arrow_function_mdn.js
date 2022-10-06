// "use strict";

const obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  }
};

// obj.b();  // prints undefined, Window { /* ... */} (or the global object)

// obj.c();  // prints 10, Object { /* ... */ }

const person = {
  fullName: () => {
    return this
  }
}

// console.log(person.fullName());

const obj2 = {
  rua: "av. angola",
  address: {
    ar() {
      return () => {
        return this
      }
    }
  }
}

// console.log(obj2.address.ar());

function fn1() {
  return function fn2() {
    return this;
  }
}

const obj3 = {
  name: "zelito",
  fn1() {
    return function () {
      return this
    }
  }
};


// console.log(obj3.fn1()());

const group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    function callback(student) {
      console.log(this);
    }

    this.students.forEach(callback);
  }
};

// group.showList();

const obj4 = {
  name: "zelito",
  fn() {
    return this;
  }
}

const fn2 = obj4.fn

console.log(fn2());


const obj5 = {
  name: "romario",
  getName: function () {
    return this.name
  }
};

const name = obj5.getName.bind(obj5)

console.log(name());