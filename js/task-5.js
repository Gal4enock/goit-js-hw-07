// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", e => {
  outputText.textContent = e.target.value;
  if (!outputText.textContent) {
    outputText.textContent = "незнакомец";
  }
})