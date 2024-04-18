// First Solution using reduce method

const sumofNumber = (num) => {
  // convert number to string and then to array
  let arr = Array.from(String(num), Number);
  // sum of the array
  return arr.reduce((a, b) => (a += b), 0);
};

// Secound Solution using while loop
const sumofNumbers = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(sumofNumber(1234));
console.log(sumofNumbers(12345));
