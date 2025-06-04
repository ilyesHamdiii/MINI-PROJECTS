let btn = document.querySelector(".btn");
let hex = document.querySelector(".hexcode");

function randomcolor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
btn.addEventListener("click", colors);
function colors() {
  document.body.style.backgroundColor = randomcolor();
  hex.innerHTML = randomcolor();
}
