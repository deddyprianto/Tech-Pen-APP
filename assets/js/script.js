const toggleButton = document.querySelector("#dark-mode-toggle");
let darkMode = localStorage.getItem("theme");
if (darkMode === "dark") enableDarkMode();

toggleButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("theme");
  if (darkMode === "dark") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  localStorage.setItem("theme", "dark");
  document.body.classList.add("dark-mode");
  const warna = document.getElementById("tulisan__saya");
  warna.classList.add("text__warna");
  const saya = document.getElementById("welcome");
  saya.classList.remove("warna");
  const text = document.querySelector("#condition");
  text.innerHTML = "Light Mode";
  toggleButton.innerHTML = "☀️";
  const bacground = document.getElementById("list__nav");
  bacground.classList.add("tranparent__backNav");
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("theme", "light");
  const warna = document.getElementById("tulisan__saya");
  warna.classList.remove("text__warna");
  const text = document.querySelector("#condition");
  text.innerHTML = "Dark Mode";
  toggleButton.innerHTML = "🌒";
  const bacground = document.getElementById("list__nav");
  bacground.classList.remove("tranparent__backNav");
  const saya = document.getElementById("welcome");
  saya.classList.add("warna");
}
