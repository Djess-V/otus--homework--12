const appEl: HTMLElement | null = document.querySelector("#app");
if (!appEl) {
  throw new Error("Нет элемента #app");
}
appEl.innerHTML = `Hello!`;
