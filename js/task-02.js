const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector(`#ingredients`);

const ingredientsItemsEl = ingredients.map(item => {
  const ingredientItemEl = document.createElement('li');
  ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = item;
  return ingredientItemEl
});

ingredientsListEl.append(...ingredientsItemsEl);
 

