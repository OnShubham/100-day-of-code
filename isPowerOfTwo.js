// Description: Write a function that determines if a given number is a power of two without using any loops.
// Example:
// isPowerOfTwo(8) => true
// isPowerOfTwo(7) => false

// logic 1
const isPowerOfTwo = (n) => {
  let op = false;

  for (let i = 1; i < n; i++) {
    if (2 ** i === n) {
      op = true;
    }
  }
  return op;
};

console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(7));

// used Math.log2() method to find the power of 2
// logic 2
const isPowerOfTwo1 = (n) => {
  return Math.log2(n) % 1 === 0;
};
console.log(isPowerOfTwo1(16));
console.log(isPowerOfTwo1(7));
