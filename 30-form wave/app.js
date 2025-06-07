let emails = document.querySelector(".email");
let password = document.querySelector(".password");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");
emails.addEventListener("click", () => {
  label1.classList.add("wave-animate");
});
password.addEventListener("click", () => {
  label2.classList.add("wave-animate");
});
emails.addEventListener("blur", () => {
  label1.classList.remove("wave-animate");
});
password.addEventListener("blur", () => {
  label2.classList.remove("wave-animate");
});
