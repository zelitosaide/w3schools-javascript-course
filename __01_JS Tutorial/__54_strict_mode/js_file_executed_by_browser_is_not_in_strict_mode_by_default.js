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

// Deleting an undeletable property is not allowed:
(function () {
  "use strict";
  try {
    delete Object.prototype;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// The word eval cannot be used as a variable:
(function () {
  "use strict";
  try {
    // let eval = 11010;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// The word arguments cannot be used as a variable:
(function () {
  "use strict";
  try {
    // let arguments = 2031;
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// The with statement is not allowed:
(function () {
  "use strict";
  try {
    // with (Math) {
    //   cosseno = cos(0);
    //   console.log(cosseno);
    // }
  } catch (error) {
    console.log({ message: error.message });
  }
})();

/**
 * For security reasons, eval() is not allowed to create 
 * variables in the scope from which it was called.
 */

// In strict mode, a variable can not be used before it is declared:
(function () {
  "use strict";
  try {
    eval("raio = 13;");
    console.log(raio);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// In strict mode, eval() can not declare a variable using the var keyword:
(function () {
  "use strict";
  try {
    eval("var diametro = 50;");
    console.log(diametro);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

// eval() can not declare a variable using the let keyword:
(function () {
  "use strict";
  try {
    eval("let comprimento = 700;"); // by default doesn't work without use "use strict"
    console.log(comprimento);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

/**
 * The "this" keyword in functions behaves differently in 
 * strict mode.
 * 
 * The "this" keyword refers to the object that called the 
 * function.
 * 
 * If the object is not specified, functions in strict 
 * mode will return "undefined" and functions in normal 
 * mode will return the global object (window):
 */
(function () {
  "use strict";
  function label04() {
    console.log(this);
  }
  label04();
})();

/**
 * Future Proof!
 * 
 * Keywords reserved for future JavaScript versions can 
 * NOT be used as variable names in strict mode.
 * 
 * These are:
 *  -> implements
 *  -> interface
 *  -> let
 *  -> package
 *  -> private
 *  -> protected
 *  -> public
 *  -> static
 *  -> yield
 */

(function () {
  "use strict";
  try {
    // let public = 1500;
    // console.log(public);
  } catch (error) {
    console.log({ message: error.message });
  }
})();

/**
 * Watch Out!
 * 
 * The "use strict" directive is only recognized at the 
 * beginning of a script or a function.
 */

(function () {
  try {
    let public = 1500;
    console.log(public);
    "use strict";
  } catch (error) {
    console.log({ message: error.message });
  }
})();