const myBtnElement = document.getElementById("myButton");
const backButtonElement = document.getElementById("backButton");
const myTextElement = document.getElementById("myText");
myBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "green";
  myTextElement.classList.add("bao", "hoang");
});
backButtonElement.addEventListener("click", () => {
  // console.log("click me");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
  myTextElement.classList.remove("bao", "hoang");
});
