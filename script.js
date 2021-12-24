const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const gridContainer = document.querySelector(".grid");
const slider = document.querySelector("#slider");
const sliderp = document.querySelector(".rangepick p");

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
});

slider.addEventListener("change", () => {
  document.querySelector("#input-color").value = "rgb(0, 0, 0)";
  gridContainer.innerHTML = "";
  setToFalse();
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
  dict.lightenify = true;
});

colorfy.addEventListener("click", () => {
  setToFalse();
  dict.color = true;
});

gridContainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("pixel")) {
    if (dict.erase == true) {
      e.target.style.backgroundColor = "rgb(182, 178, 178)";
    } else if (dict.rainbowfy == true) {
      e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (dict.lightenify == true) {
      // console.log("OG COLOR: " + e.target.style.backgroundColor);
      let ogcolor = e.target.style.backgroundColor;
      if (!ogcolor.includes("rgba")) {
        e.target.style.backgroundColor = ogcolor
          .replace("rgb", "rgba")
          .replace(")", ", 0.9");
      } else {
        let alpha = parseFloat(ogcolor.split(",")[3]);
        alpha -= 0.1;
        // console.log("NEW OPAC: " + alpha);
        e.target.style.backgroundColor = ogcolor.replace(
          /[\d\.]+\)$/g,
          `${alpha})`
        );
      }
    } else if (dict.shadify == true) {
      var c = e.target.style.backgroundColor;
      var rgb = c.match(/\d+/g);

      if (rgb.length > 3) {
        if (rgb.length == 4 && rgb[3] == 0) {
          e.target.style.backgroundColor = `rgba(182, 178, 178, 0.2)`;
        } else {
          e.target.style.backgroundColor = `rgba(${rgb[0] - 50}, ${
            rgb[1] - 50
          }, ${rgb[2] - 50}, ${(rgb[4]/10) + 0.1})`;
        }
      } else {
        e.target.style.backgroundColor = `rgb(${rgb[0] - 50}, ${rgb[1] - 50}, ${
          rgb[2] - 50
        })`;
      }
    } else if (dict.color == true) {
      let chosenColor = document.querySelector("#input-color").value;
      e.target.style.backgroundColor = chosenColor;
    } else {
      e.target.style.backgroundColor = "rgb(0, 0, 0)";
    }
  }
});

const clear = document.querySelector(".reset");

clear.addEventListener("click", () => {
  setToFalse();
  document.querySelector("#input-color").value = "rgb(00, 00, 00)";
  let pixel = document.querySelectorAll(".pixel");
  pixel.forEach((pix) => {
    pix.style.backgroundColor = "rgb(182, 178, 178)";
  });
});

createGrid(16); //default when opening site;
