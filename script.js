const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const gridContainer = document.querySelector(".grid");
const slider = document.querySelector("#slider");
const sliderp = document.querySelector(".rangepick p");

let newsize;

const createGrid = (size) => {
  for(let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = "rgb(182, 178, 178)";
    pixel.style.border = `1px solid rgb(0, 0, 0, 0.05)`;
    gridContainer.appendChild(pixel);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
}

slider.addEventListener('input', () => {
  sliderp.textContent = slider.value + " x " + slider.value;
  newsize = slider.value;
});

slider.addEventListener('mouseup', () => {
  gridContainer.innerHTML = "";
  createGrid(slider.value);
})

createGrid(16); //default when opening site;