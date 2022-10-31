label01: {
  const { log } = console;

  setTimeout(function () { log("You!!"); }, 3000);

  (function sayILove() { log("I love "); })();
}

label02: {
  const { log: print } = console;

  setInterval(myFunction, 1000);

  function myFunction() {
    let d = new Date();
    print(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
  }
}