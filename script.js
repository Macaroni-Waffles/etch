const container = document.querySelector('.container');
let gridSize = 20;
let red;
let green;
let blue;

const nav = document.createElement('div');
const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.height = "450px";
grid.style.width = "450px";
grid.style.border = "solid 5px pink";

const gridBtn = document.createElement('button')
gridBtn.textContent = "Choose grid size";
const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = "Rainbow fun!";

container.appendChild(nav);
container.appendChild(grid);
nav.appendChild(gridBtn);
nav.appendChild(rainbowBtn);


function drawGrid() {
    grid.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cellSize = 450 / gridSize;
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = "lightgrey";
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";
            grid.appendChild(cell);

            cell.addEventListener('mouseover', () => {
            cell.style.cursor = "pointer";
            cell.style.backgroundColor = "pink";
            });
        };
    };
};  

function randomRBG() {
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1;
    blue = Math.floor(Math.random() * 255) + 1;
};

function rainbowGrid() {
    grid.replaceChildren();
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cellSize = 450 / gridSize;
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = "lightgrey";
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";
            grid.appendChild(cell);

            cell.addEventListener('mouseover', () => {
            randomRBG();
            cell.style.cursor = "pointer";
            cell.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
            });
        };
    };
};  


gridBtn.addEventListener('click', (e) => {
     gridSize = prompt("Please enter a number up to 100", "20");
    if (gridSize > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        drawGrid();
    }

});

rainbowBtn.addEventListener('click', () => {
    rainbowGrid();
});

drawGrid();