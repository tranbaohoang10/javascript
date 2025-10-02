const sv1 = {
  name: "Tran Bao Hoang",
  score: 10,
};
const sv2 = {
  name: "Manh",
  score: 9,
};
const sv3 = {
  name: "Hoang",
  score: 9.5,
};
const sv = [sv1, sv2, sv3];
// on lai forEach()
sv.forEach((value, index) => {
  console.log("Index = ", index, ", Name =", value.name);
});

for (let key in sv) {
  console.log("Index =", key, ", Value =", sv[key], ", Name = ", sv[key].name);
}
for (let value of sv) {
  console.log(value);
}
//nen lam in hon la of
