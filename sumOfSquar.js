const sumOfSquar = (arr) => {
  // reduce method
  //   return arr.reduce((a, b) => (a = a + b * b), 0);

  // for of loop
  let sum = 0;
  for (let elem of arr) {
    sum = sum + elem * elem;
  }

  return sum;
};

console.log(sumOfSquar([123]));
