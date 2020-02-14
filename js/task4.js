"use strict";
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
let counterValue = 0;

const spanValue = document.querySelector("#value");
const increment = document.querySelector("button[data-action=increment]");
const decrement = document.querySelector("button[data-action=decrement]");

increment.addEventListener("click", () => {
  counterValue += 1;
  return (spanValue.textContent = counterValue);
});

decrement.addEventListener("click", () => {
  counterValue -= 1;
  return (spanValue.textContent = counterValue);
});
