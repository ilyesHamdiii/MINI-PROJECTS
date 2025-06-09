let emojy = document.querySelectorAll(".emojy");
let feedback = document.querySelector(".feedback");
let res = document.querySelector(".res");
let btn = document.querySelector(".btn");

function getValue(element) {
  return [...element.textContent]
    .filter((c) => c.toLowerCase() !== c.toUpperCase())
    .join("");
}

emojy.forEach((color) => {
  color.addEventListener("click", () => {
    emojy.forEach((e) => e.classList.remove("clicked"));
    color.classList.add("clicked");
    const result = getValue(color);
    res.textContent = result;
  });
});

// Show feedback box on button click
btn.addEventListener("click", () => {
  feedback.classList.remove("hide");
});
