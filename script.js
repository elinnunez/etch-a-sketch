const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const gridContainer = document.querySelector(".grid");
const slider = document.querySelector("#slider");
const sliderp = document.querySelector(".rangepick p");

let newsize;

var dict = {
  erase: false,
  rainbowfy: false,
  color: false,
  shadify: false,
  lightenify: false,
};

const setToFalse = () => {
  for (let x in dict) {
    dict[x] = false;
  }
};

const createGrid = (size) => {
  for (let i = 0; i < size * size; i++) {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.backgroundColor = "rgb(182, 178, 178)";
    pixel.style.border = `1px solid rgb(0, 0, 0, 0.05)`;
    gridContainer.appendChild(pixel);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;
};

slider.addEventListener("input", () => {
  sliderp.textContent = slider.value + " x " + slider.value;
  newsize = slider.value;
});

slider.addEventListener("mouseup", () => {
  document.querySelector("#input-color").value = "rgb(0, 0, 0)";
  gridContainer.innerHTML = "";
  createGrid(slider.value);
});

const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
const shader = document.querySelector(".shader");
const lighten = document.querySelector(".lighten");
const colorfy = document.querySelector(".colorpick");

eraser.addEventListener("click", () => {
  setToFalse();
  dict.erase = true;
});

rainbow.addEventListener("click", () => {
  setToFalse();
  dict.rainbowfy = true;
});

shader.addEventListener("click", () => {
  setToFalse();
  dict.shadify = true;
});

lighten.addEventListener("click", () => {
  setToFalse();
  // dict.color = true;
  dict.lightenify = true;
});

colorfy.addEventListener("click", () => {
  setToFalse();
  dict.color = true;
})

gridContainer.addEventListener("mouseover", (e) => {
  if (dict.erase == true) {
    e.target.style.backgroundColor = "rgb(182, 178, 178)";
  } else if (dict.rainbowfy == true) {
    e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;;
  } else if (dict.shadify == true) {
    e.target.style.backgroundColor = "blue";
  } else if (dict.lightenify == true) {
    e.target.style.backgroundColor = "orange";
  } else if (dict.color == true) {
    let chosenColor = document.querySelector("#input-color").value;
    e.target.style.backgroundColor = chosenColor;
  } else {
    e.target.style.backgroundColor = "black";
  }
});

const clear = document.querySelector(".reset");

clear.addEventListener("click", () => {
  setToFalse();
  document.querySelector("#input-color").value = "rgb(0, 0, 0)";
  let pixel = document.querySelectorAll(".pixel");
  pixel.forEach((pix) => {
    pix.style.backgroundColor = "rgb(182, 178, 178)";
  });
});

createGrid(16); //default when opening site;
