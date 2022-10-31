const { log: print } = console;

label01: {
  const myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    if (x === 0) {
      myResolve("OK");
    } else {
      myReject(new Error("Something went wrong!!!"));
    }
  });

  myPromise.then(
    function (value) { print(value); },
    function (error) { print(error); }
  );
}

label02: {
  const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You!!!"); }, 3000);
  });

  myPromise.then(function (value) { print(value) });
}

