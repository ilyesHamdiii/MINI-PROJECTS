const inputField = document.querySelector(".folder");
const outputField = document.querySelector(".text-res");
const buttons = document.querySelectorAll(".btn-container button");
console.log(inputField);
console.log(outputField);
console.log(buttons);
inputField.addEventListener(
  "keyup",
  () => (outputField.innerHTML = inputField.value)
);

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn1")) {
      outputField.innerHTML = outputField.innerHTML.toUpperCase();
    } else if (btn.classList.contains("btn2")) {
      outputField.innerHTML = outputField.innerHTML.toLocaleLowerCase();
    } else if (btn.classList.contains("btn3")) {
      outputField.innerHTML =
        outputField.innerHTML.charAt(0).toUpperCase() +
        outputField.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("btn4")) {
      outputField.style.fontWeight = "900";
    } else if (btn.classList.contains("btn5")) {
      outputField.style.fontStyle = "italic";
    } else if (btn.classList.contains("btn6")) {
      outputField.style.textDecoration = "underline";
    }
  });
});
