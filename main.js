function chooseHero(hero) {
    localStorage.setItem("theme", hero);
    window.location.href = "index.html";
}

const savedTheme = localStorage.getItem("theme") || "spawn"; 
document.getElementById("theme-link").setAttribute("href", `css/${savedTheme}.css`);

const Btns = document.querySelector('.buttons')

const add = function(a, b) {
    return = a + b;
}

const subtract = function(a, b) {
    return = a - b;
}

const multiply = function(numbers) {
    return = numbers.reduce((acc, current) => acc * current);
}

const divide = function(numbers) {
    return = numbers.reduce((acc, current) => acc / current);
}