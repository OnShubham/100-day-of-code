const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();

  totalCount = word.split("").reduce((acc, curr) => {
    if (curr === char) {
      acc++;
    }
    return acc;
  }, 0);

  return totalCount;
};
console.log(countChar("kakkerlak", "k"));
// → 4
