let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let text1 = document.querySelector("#text1");
let text2 = document.querySelector("#text2");
btn1.addEventListener("click", () => {
  let alert = document.querySelector(".alert");
  let btn1 = document.querySelector("#btn1");
  let btn2 = document.querySelector("#btn2");
  let text1 = document.querySelector("#text1").value;
  let text2 = document.querySelector("#text2").value;
  console.log(text1);
  navigator.clipboard.writeText(text1);
  alert.classList.add(".available");
  setTimeout(() => {
    alert.classList.remove("hide");
  }, 200);
});
btn2.addEventListener("click", () => {
  let btn1 = document.querySelector("#btn1");
  let btn2 = document.querySelector("#btn2");
  let text1 = document.querySelector("#text1").value;
  let text2 = document.querySelector("#text2");
  console.log(text1);
  text2.value = text1;
});
