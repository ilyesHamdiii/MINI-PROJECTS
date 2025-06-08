let email = document.querySelector(".email");
let icon = document.querySelector(".icon");
let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
email.addEventListener("keydown", () => {
  icon.classList.remove("hide");
  text = email.value;
  console.log(text.includes("@gmail.com"));
  if (text.match(pattern)) {
    icon.classList.add("valid");
  } else {
    icon.classList.remove("valid");
  }
});
