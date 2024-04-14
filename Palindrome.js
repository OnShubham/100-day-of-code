const isPalindrome = (str) => {
  str = str.toLowerCase()
  let reversedStr = str.split("").reverse().join("");

  return reversedStr === str;
};

console.log(isPalindrome("racecar, hey")); // true
console.log(isPalindrome("table")); // false
console.log(isPalindrome("Anna")); // true
