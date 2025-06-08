let res = document.querySelector(".res");
let quotes = document.querySelector(".quotes");
let btn = document.querySelector(".btn");
let data = [];
let randomQuote = null;
fetch("quotes.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.quotes;

    randomQuote = data[Math.floor(Math.random() * data.length)];

    console.log(randomQuote.quotes + " — " + randomQuote.author);

    quotes.textContent = randomQuote.quote;
    res.textContent = randomQuote.author;
  })
  .catch((error) => console.error("Error loading JSON:", error));

btn.addEventListener("click", () => {
  if (data.length > 0) {
    randomQuote = data[Math.floor(Math.random() * data.length)];
    quotes.textContent = randomQuote.quote;
    res.textContent = randomQuote.author;
  }
});
