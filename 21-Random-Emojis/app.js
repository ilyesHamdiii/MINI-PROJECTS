let span = document.querySelector(".Emojis ");
let words = [
  "😎",
  "😊",
  "🦉",
  "😂",
  "🤣",
  "😍",
  "😒",
  "🙌",
  "😉",
  "😢",
  "😙",
  "🫥",
  "😑",
  "🤨",
  "🤨",
  "🫡",
  "🙄",
  "😏",
  "😣",
  "😥",
  "😮",
  "😯",
];
span.addEventListener("mouseover", () => {
  let x = Math.floor(Math.random() * 21) + 1;
  /*  console.log(x); */
  span.textContent = words[x];
});
