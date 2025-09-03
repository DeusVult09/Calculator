function chooseHero(hero) {
    localStorage.setItem("theme", hero);
    window.location.href = "index.html";
}

const savedTheme = localStorage.getItem("theme") || "spawn"; 
document.getElementById("theme-link").setAttribute("href", `css/${savedTheme}.css`);

const calDisplay = document.getElementById("display");
const btns = document.querySelector(".buttons");
const decimal = document.querySelector(".decimal");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete")

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstOperand = [];
let operator = "";
let secondOperand = [];
currentOperand = firstOperand;

btns.addEventListener('click', (e) => {
    const clicked = e.target;
    const value = clicked.textContent;

    if (clicked.classList.contains("btn")) {
        currentOperand.push(value);
        calDisplay.textContent = currentOperand.join("");
    }
    
    else if (clicked.classList.contains("decimal")) {
        if (!currentOperand.includes(".")) {
            currentOperand.push(".");
            calDisplay.textContent = currentOperand.join("");
        }
    }

    else if (clicked.classList.contains("op") && value !== "=") {
        if (secondOperand.length > 0) {
            const result = operate(firstOperand, operator, secondOperand);
            result = parseFloat(result.toFixed(2));
            calDisplay.textContent = result;

            secondOperand = [];
            operator = value;
            currentOperand = secondOperand; 
        } 
        
        else {
            operator = value;
            currentOperand = secondOperand; 
        } 
    }

    else if (value === "=") {
        if (secondOperand.length === 0) return;

        const result = operate(firstOperand, operator, secondOperand);
        result = parseFloat(result.toFixed(2));
        calDisplay.textContent = result;

       
        secondOperand = [];
        currentOperand = secondOperand;
    }
});

function operate(a, operator, b) {

    let num1 = parseFloat(a.join(""));
    let num2 = parseFloat(b.join(""));
    
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "*") return multiply(num1, num2);
    if (operator === "/") return divide(num1, num2);
}

