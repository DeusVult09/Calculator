function chooseHero(hero) {
    localStorage.setItem("theme", hero);
    window.location.href = "index.html";
}

const savedTheme = localStorage.getItem("theme") || "spawn"; 
document.getElementById("theme-link").setAttribute("href", `css/${savedTheme}.css`);

const Btns = document.querySelector('.buttons');

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

let firstOperand = [];
let operator = [];
let secondOperand = [];

function operate(a, operator, b) {
    
    let a = parseFloat(firstOperand.join(""));
    let b = parseFloat(secondOperand.join(""));
    let op = operator[0];

    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

operate(firstOperand, operator, secondOperand);

