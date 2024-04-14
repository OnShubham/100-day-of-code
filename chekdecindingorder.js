const decindingOrder = (...args) => {
  return args.sort((a, b) => b - a); // add sort method to sort the numbers in decinding order
};

console.log(decindingOrder(2, 40, 2, 1, 4, 5)); // add a array of numbers to see the output
