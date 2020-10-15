const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const allList = document.querySelector("#ingredients")
console.log(allList);
ingredients.map(element => {
  const list = document.createElement("li")
  list.textContent = element;
  allList.append(list);
});
