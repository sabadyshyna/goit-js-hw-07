const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const baseList = document.querySelector(`#ingredients`);

const addListItems = (array, list) => {
  array.forEach(item => {
    const itemEl = document.createElement('li');
    itemEl.textContent = item;
    baseList.appendChild(itemEl);
  });
};

addListItems(ingredients, baseList);

console.log(baseList);
