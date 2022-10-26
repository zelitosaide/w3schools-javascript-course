(function label01() {
  "use strict";
  try {
    x = 100;
    console.log(x);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

(function () {
  "use strict";
  try {
    label02();
  } catch (error) {
    console.log({ message: error.message });
  }

  function label02() {
    y = 3.14;
    console.log(y);
  }
})();

(function () {
  x = 3.14001;
  console.log(x);
  try {
    label03();
  } catch (error) {
    console.log({ message: error.message });
  }

  function label03() {
    "use strict";
    y = 3.14;
    console.log(y);
  }
})();


// Using a variable, without declaring it, is not allowed:
(function () {
  "use strict";
  try {
    a = 100;
    console.log(a);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Using an object, without declaring it, is not allowed:
(function () {
  "use strict";
  try {
    obj = { p1: 10, p2: 20 };
    console.log(obj);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Deleting a variable (or object) is not allowed.
(function () {
  "use strict";
  let mass = 34;
  try {
    // delete mass;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Deleting a function is not allowed.
(function () {
  "use strict";
  function func(p1, p2) { return p1 + p2; };
  try {
    // delete func;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Duplicating a parameter name is not allowed:
(function () {
  "use strict";
  try {
    // console.log(func(1, 2));
    // function func(p1, p1) { return p1 + p1; };
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Octal numeric literals are not allowed:
(function () {
  "use strict";
  try {
    // let num = 010;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Octal escape characters are not allowed:
(function () {
  "use strict";
  try {
    // let num = "\010";
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// Writing to a read-only property is not allowed:
(function () {
  "use strict";
  const obj = {};
  Object.defineProperty(obj, "x", {
    value: 10,
    writable: false
  });
  console.log(obj.x);
  try {
    obj.x = 2;
  } catch (error) {
    console.log({ message: error.message });
  }
  console.log(obj.x);
})();

// Writing to a get-only property is not allowed:
(function () {
  "use strict";
  const obj = { get x() { return 10; } };
  console.log(obj.x);
  try {
    obj.x = 100;
  } catch (error) {
    console.log({ message: error.message });
  }
  console.log(obj.x);
})();
