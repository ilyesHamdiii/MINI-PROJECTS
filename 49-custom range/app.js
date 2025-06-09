const slider = document.getElementById("range");
const valueTip = document.getElementById("range-content");

function updateValueTip() {
  const sliderWidth = slider.offsetWidth;
  const max = parseInt(slider.max);
  const min = parseInt(slider.min);
  const val = parseInt(slider.value);

  const percent = (val - min) / (max - min);
  const offset = percent * sliderWidth;

  valueTip.textContent = val;
  valueTip.style.left = `${offset}px`;
}

slider.addEventListener("input", updateValueTip);

updateValueTip();
