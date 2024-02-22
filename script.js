const container = document.querySelector('.container');
let gridSize = 5;

const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.height = "450px";
grid.style.width = "450px";
grid.style.border = "solid 5px pink";

const button = document.createElement('button');
button.style.backgroundColor = "pink";
button.style.border = "solid 3px grey";
button.style.borderRadius = "10px";
button.style.fontSize = "20px";
button.style.padding = "10px 5px";
button.style.margin = "20px";
button.textContent = "Choose grid size";

container.appendChild(button);
container.appendChild(grid);

button.addEventListener('mouseover', () => {
    button.style.cursor = "pointer";
});



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

button.addEventListener('click', (e) => {
     gridSize = prompt("Please enter a number up to 100", "5");
    if (gridSize > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        drawGrid();
    }

});

drawGrid();