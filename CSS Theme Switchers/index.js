const darkButton = document.querySelector("#dark");
const lightButton = document.querySelector("#light");
const solarButton = document.querySelector("#solar");

const container = document.querySelector(".container");

console.log(darkButton);
console.log(lightButton);
console.log(solarButton);

darkButton.addEventListener("click", () => {
  container.classList.replace("light", "dark");
  classCheck(darkButton, "dark", "white");
});
lightButton.addEventListener("click", () => {
  container.classList.replace("dark", "light");
  classCheck(lightButton, "light", "black");
});
solarButton.addEventListener("click", () => {
  if (!container.classList.contains("solar")) {
    container.classList.add("solar");
  } else {
    container.classList.remove("solar");
  }
  classCheck(solarButton, "solar", "white");
});

var classCheck = (element, className, color) => {
  container.classList.contains(className)
    ? (element.style.borderBottom = `1px solid ${color}`)
    : (element.style.borderBottom = "0px");
};
