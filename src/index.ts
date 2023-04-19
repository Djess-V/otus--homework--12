import { curry } from "./curry/curry";

const functions = [curry],
  appEl: HTMLElement | null = document.querySelector("#app");
if (!appEl) {
  throw new Error("Нет элемента #app");
}
appEl.innerHTML = `${functions
  .map(
    (item, i) =>
      `<p style="color: #0f9ee3">Задача ${i + 1}</p><pre>${item}</pre>`
  )
  .join("")}`;
