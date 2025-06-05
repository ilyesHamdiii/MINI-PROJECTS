let btn = document.querySelector(".btn");
let closes = document.querySelector(".close");
let video = document.querySelector("video");
let image = document.querySelector(".image-container");
let trailer_container = document.querySelector(".video-container");
/* console.log(btn); */
btn.addEventListener("click", () => {
  trailer_container.classList.remove("active");
});
closes.addEventListener("click", () => {
  trailer_container.classList.add("active");
  video.currentTime = 0;
  video.pause;
});
