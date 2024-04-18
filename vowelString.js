// Write a function that takes a string as an argument and returns the number of vowels contained in that string.
// The vowels are "a", "e", "i", "o", "u".

const countVowels = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];

  let arr = str.split("");
//   console.log(arr);
  Conut = 0;
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) {
      Conut++;
    }
  }
  return Conut;
};

console.log(countVowels("hello world"));
console.log(countVowels("welcome to javascript"));
console.log(countVowels("javascript is awesome"));
