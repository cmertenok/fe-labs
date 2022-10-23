'use strict';

const myCell = document.getElementById('my_cell');
const chosenColor = document.getElementById('input_color');
const allCells = document.querySelectorAll('td');

function generateRandomColor() {
    function generateRandomNum() {
        return Math.floor(Math.random() * 255);
    }

    return `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`;
}

myCell.addEventListener('mouseover', () => {
    myCell.style.backgroundColor = generateRandomColor();
});

myCell.addEventListener('click', () => {
    myCell.style.backgroundColor = chosenColor.value;
});

myCell.addEventListener("dblclick", () => {
    allCells.forEach( td => {
        td.style.backgroundColor = chosenColor.value;
    });
});