// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  widgetEl: document.querySelector('.widget'),
  colorEl: document.querySelector('.color'),
  changeColorEl: document.querySelector('.change-color'),
}

refs.changeColorEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.colorEl.textContent = color;
  refs.widgetEl.style.backgroundColor = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
