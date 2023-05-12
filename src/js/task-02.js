const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItemEl = document.createElement('li');
ingredientsItemEl.classList.add('item');

const ingredientsListEl = document.querySelector('ingredients');

ingredientsListEl.append(...ingredients);
console.log(ingredientsItemEl);