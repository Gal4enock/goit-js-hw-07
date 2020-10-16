// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const div = document.querySelector("#counter");
const btnPlus = div.querySelector('[data-action="increment"]');
const btnMinus = div.querySelector('[data-action="decrement"]');
let total = document.querySelector("#value");

let counterValue = 0;
const increment = function () {
  counterValue += 1;
  total.textContent = counterValue;
}
const decrement = function () {
  counterValue -= 1;
  total.textContent = counterValue; 
}
btnPlus.addEventListener("click", increment);
btnMinus.addEventListener("click", decrement);
