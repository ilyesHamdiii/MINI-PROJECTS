let blackbtn = document.querySelector(".switch1");
let whitebtn = document.querySelector(".switch2");
let label = document.querySelector(".toggler");

function restartAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

blackbtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  label.style.backgroundColor = "white";
  whitebtn.classList.remove("hide");
  blackbtn.classList.add("hide");

  restartAnimation(blackbtn, "fadeout");
});

whitebtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
  whitebtn.classList.add("hide");
  blackbtn.classList.remove("hide");
  label.style.backgroundColor = "black";

  restartAnimation(blackbtn, "fadein");
});
