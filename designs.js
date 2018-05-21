// Select color input

let color = document.getElementById('colorPicker');
// Select size input
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWeight');
let table = document.getElementById('pixelCanvas');
// When size is submitted by the user, call makeGrid()
let sizePicker = document.getElementById('sizePicker');

sizePicker.onsubmit = function(e) {
    e.preventDefault();
    clearGrid();
    makeGrid();
}



function makeGrid() {
    for (i = 0; i < height.value; i++) {
        const row = table.insertRow(i);

        for (j = 0; j < width.value; j++) {
            const cell = row.insertCell(j);

            cell.addEventListener("click", fillCell);
        }

    }

    // Your code goes here!
}

function clearGrid() {
    while (table.firstChild)
        table.removeChild(table.firstChild);
}


function fillCell() {
    // this.setAttribute("style", `background-color: ${color.value}`);
    this.style.backgroundColor = color.value;
}