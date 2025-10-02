const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");
const previous = document.getElementById("previous");
const previousName = localStorage.getItem("baohoang");
if (previousName) {
  previous.innerText = previousName;
}

btn.addEventListener("click", () => {
  // console.log(input.value);
  localStorage.setItem("baohoang", input.value);
  document.getElementById("message").innerText = input.value;
});
