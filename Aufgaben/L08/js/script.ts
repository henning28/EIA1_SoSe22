

function playSample(file:string) {
    var sound:HTMLAudioElement = new Audio("assets/keyboard/" + file);
    sound.play();
}

document.querySelector("#a.whitekey").addEventListener('click', function() {
    playSample("a.mp3")
});
document.querySelector("#b.whitekey").addEventListener("click", function() {
    playSample("b.mp3")
});
document.querySelector("#c.whitekey").addEventListener("click", function() {
    playSample("c.mp3")
});
document.querySelector("#d.whitekey").addEventListener("click", function() {
    playSample("d.mp3")
});
document.querySelector("#e.whitekey").addEventListener("click", function() {
    playSample("e.mp3")
});
document.querySelector("#f.whitekey").addEventListener("click", function() {
    playSample("a.mp3")
});
document.querySelector("#g.whitekey").addEventListener("click", function() {
    playSample("g.mp3")
});

document.querySelector("#af.blackkey_two").addEventListener("click", function() {
    playSample("af.mp3")
});
document.querySelector("#bf.blackkey_two").addEventListener("click", function() {
    playSample("bf.mp3")
});
document.querySelector("#df.blackkey_three").addEventListener("click", function() {
    playSample("df.mp3")
});
document.querySelector("#ef.blackkey_three").addEventListener("click", function() {
    playSample("ef.mp3")
});
document.querySelector("#gf.blackkey_three").addEventListener("click", function() {
    playSample("gf.mp3")
});

var sounds: string [] = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3", "a.mp3", "c.mp3"]
var active = 0

function playInterval(){
    setInterval(function() {
        var sound:HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
        sound.play();
        active++;
    }, 500);

}

document.querySelector("#playbutton").addEventListener("click", playInterval)