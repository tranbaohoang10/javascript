let color = [2, 4, 6, 3, 7];
const newArray = color.filter((value, index) => {
  return value % 2 === 1;
});
console.log("Array First =", color);
console.log("New Array =", newArray);
