//Opdracht 1: Een click event vastmaken aan een button
const button = document.getElementById("mybutton");
const showAlert = function () {
    alert("button clicked");
};
button.addEventListener("click", showAlert);

Opdracht 2:
const button2 = document.getElementById("mybutton2");
const changeColor = document.querySelector(".blue-background");

const changeBackgroundcolor = function () {
    changeColor.classList.add("red-background")
};

button2.addEventListener("click", changeBackgroundcolor);

//Opdracht 3:

const button2 = document.getElementById("mybutton2");
const toggle = document.querySelector(".blue-background");

const toggleColor = function () {
    toggle.classList.toggle("red-background")
};

button2.addEventListener("click", toggleColor);
