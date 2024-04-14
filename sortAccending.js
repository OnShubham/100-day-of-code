const sortAccending = (...args) => {
  return args.sort((a, b) => a - b);
};

console.log(sortAccending(2, 40, 2, 1, 4, 5));

// op : [1, 2, 2, 4, 4, 5]
