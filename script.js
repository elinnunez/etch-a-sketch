const container = document.querySelector(".container");

const createGrid = (row, col) => {
  container.style.setProperty("--grid-rows", row);
  container.style.setProperty("--grid-cols", col);
  for (i = 0; i < row * col; i++) {
    let cell = document.createElement("div");
    // cell.innerText = i + 1;
    container.appendChild(cell).className = "grid-item";
  }
};

createGrid(16, 16);
