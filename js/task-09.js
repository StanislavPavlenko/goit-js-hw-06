const refs = {
  colorEl: document.querySelector('.color'),
  changeColorEl: document.querySelector('.change-color'),
}

refs.changeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.colorEl.textContent = color;
  document.body.style.backgroundColor = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
