// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputNumber = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-action="render"]');
const btnDelete = document.querySelector('[data-action="destroy"]');
const body = document.querySelector("body")
const bigBox = document.querySelector("#boxes");

const render = function () {
createBoxes (inputNumber.value)
}
const createBoxes = function (amount) {
  for (let i = 0; i <= amount-1; i += 1) {
    let width = 30;
    let height = 30;
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    
    bigBox.insertAdjacentHTML('beforeend', `<div style='width: ${width + i * 10}px; height: ${height + i * 10}px; background-color: rgb(${r},${g},${b})'></div>`);

    console.log(bigBox);
  }
}
const deletBoxes = function () {
  bigBox.innerHTML = "";
  inputNumber.value = "";
}
btnCreate.addEventListener("click", render);
btnDelete.addEventListener("click", deletBoxes)