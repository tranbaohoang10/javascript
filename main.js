const sv1 = {
  name: "Tran Bao Hoang",
  score: 10,
};
console.log("SinhVien before =", sv1);
console.log("Name =", sv1.name);
console.log("Score =", sv1["score"]);
// cap nhat gia tri
sv1.phone = "0369897344";
sv1["languages"] = "Vietnamese";
//
//delete
delete sv1.phone;
console.log("SinhVien after =", sv1);
