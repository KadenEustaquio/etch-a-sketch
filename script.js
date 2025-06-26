function makeGrid() {
    for (i = 0; i < squares; i++) {
        const box = document.createElement("div");
        // box.style.cssText = "width: 64px; height: 64px;";
        box.style.cssText = "width: " + size + "px; height: " + size + "px;";
        box.classList.add("box");
        box.style.backgroundColor = "white";
        container.appendChild(box); 
    };
}

function deleteGrid() {
    boxes.forEach((box) => {
            container.removeChild(box);
        })
}

function toggleEventListener() {
    boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            hoverStart(box);
        });
        box.addEventListener("mouseout", () => {
            hoverEnd(box);
        })
    });
}

function getRandomRGBColor() {
  // Generate a random number between 0 and 16777215 (0xFFFFFF, the maximum value for a 24-bit color)
  let randomNumber = Math.floor(Math.random() * 16777216); 

  // Convert the number to a hexadecimal string
  let hexColor = randomNumber.toString(16);

  // Pad the string with leading zeros if necessary to ensure it's 6 characters long
  hexColor = hexColor.padStart(6, '0');

  // Prepend '#' to form a valid CSS hex color code
  return `#${hexColor}`;
}

function hoverStart(element) {
    console.log(getRandomRGBColor()); // Outputs a random hex color like "#A3B4C5"
    element.style.backgroundColor = getRandomRGBColor();
}

// function hoverEnd(element) {
//     element.style.backgroundColor = "white";
// }

const container = document.querySelector(".container"), grid = 1024;

let squares = 256, size = 64;

makeGrid();

let boxes = document.querySelectorAll(".box");

toggleEventListener();

const button = document.querySelector("#sizeButton");

button.addEventListener("click", () => {
    num = prompt("Grid Size");
    while (num > 100) {
        prompt("Please select a number under 100!")
    }
    squares = num ** 2;
    size = grid/num;
    deleteGrid();
    makeGrid();
    toggleEventListener();
})