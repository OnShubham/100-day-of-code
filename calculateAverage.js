const calculateAverage = (arr) => {
  let total = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  console.log(total);
    return total.toFixed(1);
};

console.log(calculateAverage([76, 60, 83, 100, 78])); // 79.4
