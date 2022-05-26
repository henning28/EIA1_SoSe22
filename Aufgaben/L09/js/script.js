var keyboard;
(function (keyboard) {
    function playSample(file) {
        var sound = new Audio("assets/keyboard/" + file);
        sound.play();
    }
    document.querySelector("#a.whitekey").addEventListener("click", function () {
        playSample("a.mp3");
    });
    document.querySelector("#b.whitekey").addEventListener("click", function () {
        playSample("b.mp3");
    });
    document.querySelector("#c.whitekey").addEventListener("click", function () {
        playSample("c.mp3");
    });
    document.querySelector("#d.whitekey").addEventListener("click", function () {
        playSample("d.mp3");
    });
    document.querySelector("#e.whitekey").addEventListener("click", function () {
        playSample("e.mp3");
    });
    document.querySelector("#f.whitekey").addEventListener("click", function () {
        playSample("a.mp3");
    });
    document.querySelector("#g.whitekey").addEventListener("click", function () {
        playSample("g.mp3");
    });
    document.querySelector("#af.blackkey_two").addEventListener("click", function () {
        playSample("af.mp3");
    });
    document.querySelector("#bf.blackkey_two").addEventListener("click", function () {
        playSample("bf.mp3");
    });
    document.querySelector("#df.blackkey_three").addEventListener("click", function () {
        playSample("df.mp3");
    });
    document.querySelector("#ef.blackkey_three").addEventListener("click", function () {
        playSample("ef.mp3");
    });
    document.querySelector("#gf.blackkey_three").addEventListener("click", function () {
        playSample("gf.mp3");
    });
    var sounds = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3"];
    var active = 0;
    let clear = 0;
    var playbutton = document.querySelector("#playbutton");
    var font = document.querySelector("#font");
    // playbutton.addEventListener("click", playInterval);
    document.querySelector("#playbutton").addEventListener("click", function () {
        if (playbutton.getAttribute("class") == "stop") {
            playbutton.setAttribute("class", "start");
        }
        else {
            playbutton.setAttribute("class", "stop");
        }
    });
    document.querySelector(".start").addEventListener("click", () => {
        clear = setInterval(playInterval, 500);
    });
    document.querySelector(".stop").addEventListener("click", () => {
        clearInterval(clear);
    });
    function playInterval() {
        var sound = new Audio("assets/keyboard/" + sounds[active]);
        sound.play();
        active++;
        if (active == 5) {
            active = 0;
        }
    }
    font.addEventListener("click", function () {
        if (font.getAttribute("class") == "fa-solid fa-stop fa-10x") {
            font.setAttribute("class", "");
        }
        else {
            font.setAttribute("class", "fa-solid fa-stop fa-10x");
        }
    });
})(keyboard || (keyboard = {}));
// function playInterval(): void {
//     interval = setInterval(function(): void {
//         var sound: HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
//         sound.play();
//         active++;
//         if (active == 5) {
//             active = 0;
//         }
//     },                     500);
// }
//# sourceMappingURL=script.js.map