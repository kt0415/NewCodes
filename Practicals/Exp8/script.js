const mainContainer = document.getElementById("main-container");
const hoverButton = document.getElementById("hoverButton");
const focusInput = document.getElementById("focusInput");

hoverButton.addEventListener("mouseover", function () {
  mainContainer.style.backgroundColor = "yellow";
});

hoverButton.addEventListener("mouseout", function () {
  mainContainer.style.backgroundColor = "orange";
});

function changeBackgroundColor(color) {
  mainContainer.style.backgroundColor = color;
  focusInput.style.backgroundColor = "yellowgreen";
}

document.body.addEventListener("click", function (event) {
  if (event.target !== focusInput) {
    mainContainer.style.backgroundColor = "orange";
    focusInput.style.backgroundColor = "white";
  }
});