const password = document.querySelector(".password");
const eye = document.querySelector("#eye");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});
