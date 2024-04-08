const findLongestWord = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  // conver the string into an array of words

  //   words = str.split(" ");
  //   words = words.sort((a, b) => b.length - a.length);
  //   console.log(words);
  //   return words[0];

  // used a reduce function to find the longest word

  const words = str.split(" ");

  return words.reduce((curr, next) =>
    curr.length > next.length ? curr : next
  );
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
