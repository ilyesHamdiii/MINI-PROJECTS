let btn = document.querySelector(".btn");
let text = document.querySelector(".content-2");
let container = document.querySelector(".container");
btn.addEventListener("click", () => {
  let btn = document.querySelector(".btn");

  text.classList.toggle("hide");
  btn.classList.toggle("move");
  container.classList.toggle("move1");
});
