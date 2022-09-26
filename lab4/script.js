'use strict';

/* Task 1 */

const elemetId = document.getElementById('task1');
const elemetClass = document.querySelector('.task1');

function generateRandomColor() {
    function generateRandomNum() {
        return Math.floor(Math.random() * 255);
    }

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

const image = document.getElementById('picture');
let startWidth = 700;
const step = 100;

function addPicture() {
    image.src = 'https://otdihnavse100.com.ua/1504/ekskursiya-v-chernigov-iz-kieva.jpg';
    image.style.display = '';
}

function deletePicture() {
    image.style.display = 'none';
}

function increase() {
    startWidth += step;
    image.style.width = `${startWidth}px`;
}

function decrease() {
    startWidth -= step;
    image.style.width = `${startWidth}px`;
}
