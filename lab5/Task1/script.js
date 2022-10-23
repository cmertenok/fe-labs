'use strict';

const body = document.querySelector("body");
const answersDiv = document.createElement("div");
const answers = [];
const wrongAnswers = [];
let isValid = true;

function clear() {
    wrongAnswers.forEach(wrongAnswers => {
        const field = document.getElementById(wrongAnswers);
        field.style.backgroundColor = 'white';
        field.style.border = '1px gray solid';
    });

    while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }

    isValid= true;
    wrongAnswers = [];
    answers = [];
}

function check(id, regex, name) {
    const elementValue = document.getElementById(id).value;

    if(elementValue.match(regex)) {
        const answer = document.createElement("p");
        answer.innerHTML = `<b>${name}</b>: ${elementValue}`;
        answers.push(answer);
    } else {
        isValid = false;
        wrongAnswers.push(id);
    }
}

function confirm() {
    clear();
    check("name", /^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/, "ПІБ");
    check("birth", /^(\d{2}\.){2}\d{4}$/, "Дата Народження");
    check("address", /^м\. \d{6}$/, "Адреса");
    check("email", /^\w+@\w+\.com$/, "E-mail");
    check("telegram", /^@[\w_]+$/, "Telegram");

    if(isValid) {
        const user_info = document.createElement("h3");
        user_info.innerHTML = "Введені дані";
        answersDiv.appendChild(user_info);
        answers.forEach(answer => answersDiv.appendChild(answer));
        body.appendChild(answersDiv);
    } else {
        wrongAnswers.forEach(wrongAnswers => {
            const field = document.getElementById(wrongAnswers);
            field.style.border = "1px red solid";
        });
    }
}

