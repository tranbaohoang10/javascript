const pr1 = {
  name: "T-shirt",
  price: 500,
  in_Stock: true,
};
const pr2 = {
  name: "áo sơ mi",
  price: 600,
  in_Stock: true,
};
const pr3 = {
  name: "áo chống nắng",
  price: 900,
  in_Stock: false,
};
const pr4 = {
  name: "quần kaki",
  price: 1000,
  in_Stock: true,
};
const pr5 = {
  name: "dép bánh mì",
  price: 100,
  in_Stock: false,
};
const products = [pr1, pr2, pr3, pr4, pr5];
// cau 1: in ra ten san pham dau tien
console.log("===in ra san pham dau tien===");
console.log(products[0]);
// cau 2:thay doi gia san pham thu 2 thanh 150 va in ra danh sach tat ca san pham
console.log(
  "===thay doi gia san pham thu 2 thanh 150 va in ra danh sach tat ca san pham==="
);
products[1].price = 150;
console.log(products);
// cau 3: them 1 san pham moi vao cuoi mang va in ra danh sach tat ca san pham
console.log(
  "===them 1 san pham moi vao cuoi mang va in ra danh sach tat ca san pham==="
);
const pr6 = {
  name: "quan Jean",
  price: 1500,
  in_Stock: true,
};
products.push(pr6);
console.log(products);
// cau 4: xoa san pham cuoi cung ra khoi danh sach va in ra tat ca san pham
console.log(
  "===xoa san pham cuoi cung ra khoi danh sach va in ra tat ca san pham==="
);
console.log(products.pop());
console.log(products);
// cau 5: dung forEach() de in ra tat ca ten san pham
console.log("===dung forEach() de in ra tat ca ten san pham===");
products.forEach((value) => {
  console.log(value);
});
// cau 6: dung map() de tao mang moi chi chua gia san pham
console.log("===dung forEach() de in ra tat ca ten san pham===");
const newArrayUseMap = products.map((value) => {
  return value.price;
});
console.log(newArrayUseMap);
// cau 7: dung filter() de lay cac san pham con hang(inStock = true)
console.log("===dung filter() de lay cac san pham con hang(inStock = true)===");
const newArrayUseFilter = products.filter((value) => {
  return value.in_Stock === true;
});
console.log(newArrayUseFilter);
// cau 8: dung for...in de duyet qua thuoc tinh cua san pham dau tien
console.log(
  "===dung for...in de duyet qua thuoc tinh cua san pham dau tien==="
);
for (let key in pr1) {
  console.log(key, pr1[key]);
}
