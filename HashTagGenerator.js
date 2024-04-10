const generateHash = (str) => {
  if (str.length > 250 || str.trim().length === 0) {
    return false;
  }

  str = str.trim().split(" ");
  str = str.map((curElem) =>
    curElem.replace(curElem[0], curElem[0].toUpperCase())
  );

  // str = `#${str.join("")}`;

  return `#${str.join("")}`;
};
console.log(generateHash("heyy welocme to the world of hashTags"));
// Output: #HeyyWelocmeToTheWorldOfHashTags
