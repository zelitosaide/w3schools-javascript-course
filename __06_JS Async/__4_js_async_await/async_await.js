const { log: print } = console;

label01: {
  const promise = function () {
    let x = 1;
    if (x === 0) {
      return Promise.reject("Something went wrong!!");
    } else {
      return Promise.resolve("hello");
    }
  }

  promise().then(
    function (value) { print(value); },
    function (error) { print(error); },
  );
}

label02: {
  const promise = function () {
    let x = 0;
    if (x === 0) {
      return Promise.reject("Something went wrong!!");
    } else {
      return Promise.resolve("hello");
    }
  }

  promise()
    .then(function (value) { print(value); })
    .catch(function (error) { print(error) });
}


label03: {
  const promise = new Promise(function (resolve, reject) {
    let x = 0;
    if (x === 0) {
      reject("Something went wrong!!");
    } else {
      resolve("hello");
    }
  });

  promise.then(
    function (value) { print(value); },
    function (error) { print(error); }
  );
}

label04: {
  const promise = async function () {
    let x = 1;
    if (x === 0) {
      return "Hello 2";
    } else {
      throw "Error 2";
    }
  }

  promise().then(
    function (value) { print(value); },
    function (error) { print(error); },
  );
}

