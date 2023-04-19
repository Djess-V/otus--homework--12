import { curry } from "./curry/curry";
import { summator } from "./summator/summator";
import Parallel from "./parallel/Parallel";
import { spiral } from "./spiral/spiral";

const functions = [curry, summator, Parallel, spiral],
  titles = [
    "Функция каррирования",
    "Функция сумматор",
    "Класс для параллельной потоковой обработки данных",
    "Фукнция, возвращающая развернутую по спирали матрицу (любой размерности)",
  ],
  appEl: HTMLElement | null = document.querySelector("#app");
if (!appEl) {
  throw new Error("Нет элемента #app");
}
appEl.innerHTML = `${functions
  .map(
    (item, i) =>
      `<p style="color: #2d87b3">Задача ${i + 1}</p><p style="color: #0f9ee3">${
        titles[i]
      }</p><pre>${item}</pre>`
  )
  .join("")}`;
