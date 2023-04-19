import { curry } from "./curry/curry";
import { summator } from "./summator/summator";

const functions = [curry, summator],
  titles = ["Функция каррирования", "Функция сумматор"],
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
