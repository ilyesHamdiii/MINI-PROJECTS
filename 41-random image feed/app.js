const container = document.querySelector(".content");
const rows = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");

  const id = Math.floor(Math.random() * 1000);

  img.src = `https://picsum.photos/seed/${id}/300/200`;

  img.alt = "Random Image";
  img.style.margin = "10px";
  img.style.borderRadius = "10px";
  container.appendChild(img);
}
