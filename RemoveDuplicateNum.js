// Duplicate numbers from a number
const Duplicate = (num) => {
  let arr = Array.from(String(num), Number);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result.join("");
};

// Remove duplicate numbers from an array
const DuplicateNum = (arr) => {
  let newArr = [...new Set(arr)];
  return newArr;
};
console.log(Duplicate(123421234));
console.log(DuplicateNum([1, 2, 3, 4, 5, 6, 2, 3, 1, 2]));


