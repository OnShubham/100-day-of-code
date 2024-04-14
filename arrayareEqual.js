// check the both are qual or not

const arayEqual = (arr1, arr2) => {
  if (arr1.lenght !== arr2.lenght) {
    return false;
  }
 return arr1.every((element, index) => element === arr2[index]);
};

console.log(arayEqual([76, 60, 83, 100, 78], [76, 60, 83, 100, 78])); // true
console.log(arayEqual([76, 60, 83, 100, 78], [76, 60, 83, 100])); // false
