const container = document.querySelector('.container');
const gridSize = 50;

const grid = document.createElement('div');
grid.classList.add('grid');
grid.style.height = "400px";
grid.style.width = "400px";
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

function drawGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = "lightgrey";
            cell.style.height = "25px";
            cell.style.width = "25px";
            grid.appendChild(cell);
            cell.addEventListener('mouseover', () => {
                cell.style.cursor = "pointer";
                cell.style.backgroundColor = "pink";
            });
        };
    };
};

button.addEventListener('mouseover', () => {
    button.style.cursor = "pointer";
});

button.addEventListener('click', (e) => {
    let gridNumber = prompt("Please enter a number up to 100", "50");
    if (gridNumber > 100) {
        alert("Please enter a number between 1 and 100");
    }
    else {
        drawGrid();
    }

});

drawGrid();