let btn = document.querySelector(".btn");
let close = document.querySelector(".close");
let content = document.querySelector(".content");
let container = document.querySelector(".container");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");

btn.addEventListener("click", () => {
  content.classList.remove("hide");
  container.classList.add("hide1");
  h1.classList.add("hide");
  container.classList.add("load");
  p.classList.add("hide");
  btn.classList.add("hide");
});
close.addEventListener("click", () => {
  content.classList.add("hide");
  container.classList.remove("hide1");
  p.classList.remove("hide");
  console.log("hello ");
  btn.classList.remove("hide");
  p.classList.remove("hide");
  h1.classList.remove("hide");
});
