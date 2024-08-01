const arr = [2, 3, 4, 2, 4];

function lessthan(x) {
  return x < 3;
}

function odd(x) {
  return x % 2;
}

const output = arr.filter(odd);
const output1 = arr.filter((x) => x > 3);

function map2(x) {
  return x * 2;
}

const map3 = arr.map(map2);

console.log(output, output1, map3);

const arr2 = [3, 3, 4, 3, 4, 3, 3, 4, 2];

const redu = arr.reduce(function (acc, curr) {
  acc = acc + curr;

  return acc;
}, 0);

console.log(redu);

const arr1 = [4, 5, 6];

const max = arr1.reduce(function (x, y) {
  if (y > x) {
    y = x;
  }
  return x;
});

console.log(max);
