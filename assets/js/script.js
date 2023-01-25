const body = document.querySelector("body")
const modeToggle = document.querySelector(".mode-toggle");

modeToggle.addEventListener('click', () => {
    body.classList.toggle("dark");
})