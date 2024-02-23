const container = document.querySelector('.container');
let gridSize = 5;
let pretty = "shit";
let red;
let green;
let blue;

const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.height = "450px";
grid.style.width = "450px";
grid.style.border = "solid 5px pink";

const gridBtn = document.createElement('button')
gridBtn.textContent = "Choose grid size";
const rainbowBtn = document.createElement('button');
rainbowBtn.textContent = "Switch to rainbow";

container.appendChild(gridBtn);
container.appendChild(rainbowBtn);
container.appendChild(grid);


rainbowBtn.addEventListener('mouseover', () => {
    red = Math.floor(Math.random() * 255) + 1;
    green = Math.floor(Math.random() * 255) + 1;
    blue = Math.floor(Math.random() * 255) + 1;
    rainbowBtn.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
});


function drawGrid() {
    grid.replaceChildren();
    if (1 === 1) {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const cellSize = 450 / gridSize;
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.backgroundColor = "lightgrey";
                cell.style.height = cellSize + "px";
                cell.style.width = cellSize + "px";
                grid.appendChild(cell);
            };
        };
        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;
        cell.addEventListener('mouseover', () => {
            cell.style.cursor = "pointer";
            cell.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
        });
        console.log("if statement");
    };
    else {
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const cellSize = 450 / gridSize;
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.style.backgroundColor = "lightgrey";
                cell.style.height = cellSize + "px";
                cell.style.width = cellSize + "px";
                grid.appendChild(cell);
            };
        };
        cell.addEventListener('mouseover', () => {
            cell.style.cursor = "pointer";
            cell.style.backgroundColor = "pink";
        console.log("else statement");
        });
    };
};    


gridBtn.addEventListener('click', (e) => {
     gridSize = prompt("Please enter a number up to 100", "5");
    if (gridSize > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        drawGrid();
    }

});

rainbowBtn.addEventListener('click', () => {
    pretty = "fuck";
    drawGrid();
});

drawGrid();