let btn = document.querySelector(".btn");
let p = document.querySelector("p");
document.addEventListener("click", () => {
  let text = document.querySelector("input").value;
  if (text != "") {
    let regex = new RegExp(text, "gi");
    p.innerHTML = p.textContent.replace(regex, "<mark>$&</mark>");
  }
});
