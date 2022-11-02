const gridBtn = document.querySelector("#grid-button");
const container = document.querySelector(".container");
const randomBtn = document.querySelector("#random");
const greyBtn = document.querySelector("#shades-grey");
const clearBtn = document.querySelector("#clear-grid");
const containerWidth = 600;
let shade = 0;
let mode = "";

function random() {
    return Math.floor(Math.random() * 255);
}

function getShade() {
    if (Math.floor(shade) === 1) shade = 0;
    return shade += 0.1;
}

function changeBackgroundColor() {
    if (mode === "random") {
        this.style.backgroundColor = `rgb(${random()},${random()}, ${random()})`;
    }
    if (mode === "grey") {
        this.style.backgroundColor = `rgba(0,0,0, ${getShade()})`;
    }
    if (mode === "") {
        this.style.backgroundColor = "black";
    }
}

function makeCell(dimension) {
    let cell = document.createElement("div");
    cell.style.width = `${Math.round(containerWidth / dimension)}px`;
    cell.style.height = `${Math.round(containerWidth / dimension)}px`;
    cell.classList.add("cell");
    cell.addEventListener("mouseover", changeBackgroundColor);
    return cell;
}

function makeGrid(dimension = 16) {
    container.replaceChildren();
    for (let i = 0; i < dimension; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < dimension; j++) {
            row.appendChild(makeCell(dimension));
        }
        container.appendChild(row);
    }

}

gridBtn.addEventListener("click", function () {
    let userInput = prompt("Enter dimension for grid:");
    while (isNaN(userInput) || userInput < 1 || userInput > 100) {
        userInput = prompt("Please enter value betwenn 1 and 100:");
    }
    makeGrid(userInput);
});

randomBtn.addEventListener("click", () => {
    mode = "random";
});

greyBtn.addEventListener("click", () => {
    mode = "grey";
});

clearBtn.addEventListener("click", () => {
    for (let item of container.children) {
        for (let subitem of item.children) {
            subitem.style.backgroundColor = "white";
        }
    }
    mode = "";
});










