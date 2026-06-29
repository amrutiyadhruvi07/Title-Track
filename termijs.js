// Input, Button and Output

let input = document.getElementById("inputText");
let submit = document.getElementById("submitBtn");
let output = document.getElementById("output");

// Submit Button

submit.addEventListener("click", function(){

    output.textContent = input.value;

    input.value = "";

});

// Color Buttons

let red = document.getElementsByClassName("red");
let green = document.getElementsByClassName("green");
let blue = document.getElementsByClassName("blue");
let yellow = document.getElementsByClassName("yellow");

// Red

red[0].addEventListener("click", function(){

    document.body.style.backgroundColor = "red";

});

// Green

green[0].addEventListener("click", function(){

    document.body.style.backgroundColor = "green";

});

// Blue

blue[0].addEventListener("click", function(){

    document.body.style.backgroundColor = "blue";

});

// Yellow

yellow[0].addEventListener("click", function(){

    document.body.style.backgroundColor = "yellow";

});