const chekTriangles = (a, b, c) => {
  if (a === b && b === c) {
    return "Equilateral";
  }
  if (a === b || b === c || a === c) {
    return "Isosceles";
  }
  return "Scalene";
};

console.log(chekTriangles(7, 7, 7)); // → Equilateral
console.log(chekTriangles(5, 5, 7)); // → Isosceles
console.log(chekTriangles(3, 4, 5)); // → Scalene
console.log(chekTriangles(7, 7, 5)); // → Isosceles
