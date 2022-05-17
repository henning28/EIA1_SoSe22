// var audio = new Audio ("assets/keyboard/a.mp3");
const start = document.getElementById("a");
start.addEventListener("click", playSample);
function playSample() {
    var sound = new Audio("assets/keyboard/a.mp3");
    sound.play();
}
document.querySelector("#a.whitekey").addEventListener("click", playSample);
// document.querySelector("#b.whitekey").addEventListener("click", playSample);
//# sourceMappingURL=script.js.map