let btn1 = document.querySelector(".increment");
let btn2 = document.querySelector(".save");
let int = document.querySelector(".int");
let res = document.querySelector(".entries");
btn1.addEventListener("click", () => {
  x = Number(int.textContent);
  x = x + 1;
  int.innerHTML = x;
});
let i = 0;
btn2.addEventListener("click", () => {
  i = i + 1;
  x = int.textContent;
  res.textContent = res.textContent + x + ",";
  int.textContent = 0;
  if (i == 15) {
    res.textContent = res.textContent + "\n";
    i = 0;
  }
  console.log(i);
});
