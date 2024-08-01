function x() {
  let a = 1;

  for (let i = a; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x();
