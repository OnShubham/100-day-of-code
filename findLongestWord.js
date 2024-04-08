const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  words = str.split(" ");
  words = words.sort((a, b) => b.length - a.length);
  console.log(words);
  return words[0];
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
