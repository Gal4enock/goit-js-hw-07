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
// let amount = 0;
//   inputNumber.addEventListener("input", e => {
//     amount = e.target.value;
//     console.log(amount);
// })

const createBoxes = function (amount) {
 let amount = 0;
  inputNumber.addEventListener("input", e => {
    amount = e.target.value;
    console.log(amount);
})
  const bigBox = document.querySelector("#boxes");
  for (let i = 0; i <= amount-1; i += 1) {
    let width = 30;
    let height = 30;
    let x = Math.round(Math.random() * 255);
    let y = Math.round(Math.random() * 255);
    let z = Math.round(Math.random() * 255);
    
    bigBox.insertAdjacentHTML('beforeend', `<div style='width: ${width + i * 10}px; height: ${height + i * 10}px; background-color: rgb(${x},${y},${z})'></div>`);

    console.log(bigBox);
  }
}
btnCreate.addEventListener("click", createBoxes)