'use strict';
/* Task 1 */
const elemetId = document.getElementById('task1');
const elemetClass = document.querySelector('.task1');

function generateRandomNum() {
    return Math.floor(Math.random() * 255);
}

function generateRandomColor() {
    return `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`;
}
 
function paintFirst() {
    elemetId.style.background = generateRandomColor();
    elemetId.style.color = generateRandomColor();
}

function paintSecond() {
    elemetClass.style.background = generateRandomColor();
    elemetClass.style.color = generateRandomColor();
}

/* Task 2 */