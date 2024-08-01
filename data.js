const user = [
  { firstn: "shubham", lastnaem: "kharche", age: 20 },
  { firstn: "chirag", lastnaem: "kharche", age: 22 },
  { firstn: "siraj", lastnaem: "kharche", age: 23 },
  { firstn: "nikhil", lastnaem: "kharche", age: 21 },
  { firstn: "rupes", lastnaem: "kharche", age: 24 },
];

// const output = user.map((x) => x.firstn + " " + x.lastnaem);

const output1 = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
}, {});

console.log(output1);
