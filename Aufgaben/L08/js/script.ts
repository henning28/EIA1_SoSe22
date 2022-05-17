// var audio = new Audio ("assets/keyboard/a.mp3");

const start:HTMLDivElement = document.getElementById("a") as HTMLDivElement;
start.addEventListener("click", playSample);

function playSample() {
    var sound = new Audio("assets/keyboard/a.mp3");
    sound.play();

}

document.querySelector("#a.whitekey").addEventListener("click", playSample);
// document.querySelector("#b.whitekey").addEventListener("click", playSample);

