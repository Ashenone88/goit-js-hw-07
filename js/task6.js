"use strict";
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то outline инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
const inputLength = document.querySelector("#validation-input[data-length]");
const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputDataSetLenght);

function inputDataSetLenght() {
  const setLength = Number(input.dataset.length);
  let enterLenght = input.value.length;
  if (setLength === enterLenght) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
