window.addEventListener("keydown", () => {
  let res1 = document.querySelector(".res1");
  let res2 = document.querySelector(".res2");
  let res3 = document.querySelector(".res3");
  let key = document.querySelector(".keycode");
  /*   console.log(event.key);
  console.log(event.keyCode);
  console.log(event.code); */
  res1.textContent = event.key;
  res2.textContent = event.keyCode;
  res3.textContent = event.code;
  key.classList.remove("hide");
});
