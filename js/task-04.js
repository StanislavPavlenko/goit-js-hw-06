const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrementEl);
incrementBtn.addEventListener('click', incrementEl);

let value = 0;

function decrementEl(e) {
  value -= 1;
  counterValue.textContent = value;
}

function incrementEl(e) {
  value += 1;
  counterValue.textContent = value;
}