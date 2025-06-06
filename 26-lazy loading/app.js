function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let laod = document.querySelector(".bg");
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let bg = document.querySelector(".bg");
window.addEventListener("load", async function printNumbers() {
  btn.classList.add("hide");
  for (i = 0; i < 100; i++) {
    text.innerHTML = i + "%";
    console.log(i);
    await wait(10);

    if (i > 100) {
      clearInterval(int);
    }
  }
  laod.classList.add("hide");
  text.classList.add("hide");
  btn.classList.remove("hide");
});
