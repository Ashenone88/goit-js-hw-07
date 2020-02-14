"use strict";
// Напиши скрипт, который выполнит следующие операции.
// + Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// + Для каждого элемента li.item в списке ul.list, найдет и выведет в консоль текст заголовка элемента (теге h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4
const categories = document.querySelector("#categories");

const categoriesLength = categories.children.length;
console.log(`В списке ${categoriesLength} категории.`);

const categoriesCountItem = categories
  .querySelectorAll(".item")
  .forEach(elem =>
    console.log(
      `Категория: ${elem.children[0].innerText}, Количество элементов: ${elem.children[1].children.length}`
    )
  );
