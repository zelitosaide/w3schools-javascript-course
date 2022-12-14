const { log: print } = console;

// label01: {
//   const promise = function () {
//     let x = 1;
//     if (x === 0) {
//       return Promise.reject("Something went wrong!!");
//     } else {
//       return Promise.resolve("hello");
//     }
//   }

//   promise().then(
//     function (value) { print(value); },
//     function (error) { print(error); },
//   );
// }

// label02: {
//   const promise = function () {
//     let x = 0;
//     if (x === 0) {
//       return Promise.reject("Something went wrong!!");
//     } else {
//       return Promise.resolve("hello");
//     }
//   }

//   promise()
//     .then(function (value) { print(value); })
//     .catch(function (error) { print(error) });
// }

// label03: {
//   const promise = new Promise(function (resolve, reject) {
//     let x = 0;
//     if (x === 0) {
//       reject("Something went wrong!!");
//     } else {
//       resolve("hello");
//     }
//   });

//   promise.then(
//     function (value) { print(value); },
//     function (error) { print(error); }
//   );
// }

// label04: {
//   const promise = async function () {
//     let x = 1;
//     if (x === 0) {
//       return "Hello 2";
//     } else {
//       throw "Error 2";
//     }
//   }

//   promise().then(
//     function (value) { print(value); },
//     function (error) { print(error); },
//   );
// }

// label05: {
//   const myDisplay = function () {
//     const promise = new Promise(function (resolve, reject) {
//       resolve("1. I love");
//     });

//     promise.then(function (value) {
//       print(value);
//       print("2. You");
//     });
//   }

//   myDisplay();
// }

// label06: {
//   const myDisplay = async function () {
//     const promise = new Promise(function (resolve, reject) {
//       resolve("1. I love");
//     });

//     const response = await promise;
//     print(response);
//     print("2. You");
//   }

//   myDisplay().then(function () {
//     console.log("3. Finshed");
//   });
// }

// label07: {
//   const myDisplay = async function () {
//     const promise = new Promise(function (resolve, reject) {
//       resolve("1. I love");
//     });

//     const response = await promise;
//     return response + " You";
//   }

//   myDisplay().then(function (value) { print(value); });
// }

// label08: {
//   const myDisplay = async function () {
//     const promise = new Promise(function (resolve, reject) {
//       resolve("1. I love");
//     });

//     print("+");
//     print(await promise);
//     print("+");
//   }

//   myDisplay();
// }

// label09: {
//   const myDisplay = async function () {
//     const promise = new Promise(function (resolve, reject) {
//       resolve("1. I love");
//     });
//     return await promise;
//   }

//   print(await myDisplay());
//   print("+");
// }

// label10: {
//   const promise = async function () {
//     return "Hello";
//   }
//   print(await promise());
//   print(promise());
// }

// label11: {
//   const myFunction = async function () {
//     const promise = new Promise(function (resolve) {
//       setTimeout(function () { resolve("I love"); }, 5000);
//     });
//     const msg = await promise;
//     print("1. ");
//     console.log(msg);
//   }

//   myFunction();
// }

label12: {
  const myFunction = async function () {
    const promise = new Promise(function (resolve) {
      setTimeout(function () {
        resolve("I love You!!!");
      }, 5000);
    });
    print(await promise);
  };

  myFunction().then(function () {
    print("status code: 200");
  });

  print("Goodbye", "...");
}
