function makeGrid() {
    for (i = 0; i < squares; i++) {
        const box = document.createElement("div");
        // box.style.cssText = "width: 64px; height: 64px;";
        box.style.cssText = "width: " + size + "px; height: " + size + "px;";
        box.classList.add("box");
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

function hoverStart(element) {
    element.setAttribute("background-color", "red;");
    element.classList.toggle("red");
}

function hoverEnd(element) {
    element.setAttribute("background-color", "white;");
    element.classList.toggle("red");
}

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