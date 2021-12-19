const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const gridContainer = document.querySelector(".grid");


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

createGrid(32);
