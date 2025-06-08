let spans = document.querySelectorAll("span");
let container = document.querySelector(".container");

spans.forEach((color) => {
  color.addEventListener("click", () => {
    const bg = getComputedStyle(color).backgroundColor;
    console.log("Clicked color:", bg);
    container.style.backgroundColor = bg;
  });
});
