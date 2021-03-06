// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const refs = {
  list: document.querySelector("#categories"),
  items: document.querySelectorAll(".item"),
}
const total = refs.list.childElementCount;
console.log(`В списке ${total} категории.`);

const category =[...refs.items].map(el => {
  let title = el.querySelector("h2").textContent;
  let count = el.children[1].querySelectorAll("li").length;
  console.log(`Категория: ${title}\nКоличество элементов: ${count}\n`); 
})
