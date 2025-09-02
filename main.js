function chooseHero(hero) {
    localStorage.setItem("theme", hero);
    window.location.href = "index.html";
}

const savedTheme = localStorage.getItem("theme") || "spawn"; 
document.getElementById("theme-link").setAttribute("href", `css/${savedTheme}.css`);

const calDisplay = document.getElementById("display");
const btns = document.querySelector(".buttons");
const btn = document.querySelector(".btn");
const op = document.querySelector(".op");
const decimal = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete")

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
let operator = "";
let secondOperand = [];
currentOperand = firstOperand;

const calDisplay = "";
btns.addEventListener('click', () => {
    if (btns == num) {
        currentOperand.push(btns.textContent);
        calDisplay.textContent = currentOperand.join("");
    } else if (btns == "=") {
        return operate;
    }
})


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

