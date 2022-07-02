var l09;
(function (l09) {
    // function playSample(file: string): void {
    //     var sound: HTMLAudioElement = new Audio("assets/keyboard/" + file);
    //     sound.play();
    // }
    var sounds = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3"];
    var allsounds = ["a.mp3", "b.mp3", "c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "af.mp3", "bf.mp3", "df.mp3", "ef.mp3", "gf.mp3"];
    var active = 0;
    var playbutton = document.querySelector("#playbutton");
    let interval;
    let intervalstatus = false;
    let index;
    document.querySelector("#c.whitekey").addEventListener("click", function () { playSample("c.mp3"); });
    document.querySelector("#d.whitekey").addEventListener("click", function () { playSample("d.mp3"); });
    document.querySelector("#e.whitekey").addEventListener("click", function () { playSample("e.mp3"); });
    document.querySelector("#f.whitekey").addEventListener("click", function () { playSample("f.mp3"); });
    document.querySelector("#g.whitekey").addEventListener("click", function () { playSample("g.mp3"); });
    document.querySelector("#a.whitekey").addEventListener("click", function () { playSample("a.mp3"); });
    document.querySelector("#b.whitekey").addEventListener("click", function () { playSample("b.mp3"); });
    document.querySelector("#df.blackkey_two").addEventListener("click", function () { playSample("df.mp3"); });
    document.querySelector("#ef.blackkey_two").addEventListener("click", function () { playSample("ef.mp3"); });
    document.querySelector("#gf.blackkey_three").addEventListener("click", function () { playSample("gf.mp3"); });
    document.querySelector("#af.blackkey_three").addEventListener("click", function () { playSample("af.mp3"); });
    document.querySelector("#bf.blackkey_three").addEventListener("click", function () { playSample("bf.mp3"); });
    function playSample(file) {
        var sound = new Audio("assets/keyboard/" + file);
        sound.play();
    }
    function Interval() {
        if (intervalstatus == false) {
            intervalstatus = true;
            interval = setInterval(playInterval, 500);
        }
        else {
            intervalstatus = false;
            if (active != 0) {
                active = 0;
            }
            clearInterval(interval);
        }
    }
    function playInterval() {
        if (playbutton.className === "go") {
            // var sound: HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
            playSample(sounds[active]);
            active++;
            if (active == 5) {
                active = 0;
            }
        }
    }
    document.querySelector("#playbutton").addEventListener("click", function () {
        if (document.querySelector("#playbutton div").getAttribute("class") == "fa-solid fa-stop fa-7x") {
            document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-play fa-7x");
        }
        else {
            document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-stop fa-7x");
        }
    });
    document.querySelector("#play").addEventListener("click", Interval);
    // REMIX
    var btncontainer = document.querySelector("#remix_container");
    let remixinterval;
    var remixactive;
    let remixintervalstatus = false;
    let beats = [0, 1, 2, 1];
    function RemixInterval() {
        if (remixintervalstatus == false) {
            remixintervalstatus = true;
            remixinterval = setInterval(playRemixInterval, 500);
        }
        else {
            remixintervalstatus = false;
            if (remixactive != 0) {
                remixactive = 0;
            }
            clearInterval(remixinterval);
        }
    }
    function playRemixInterval() {
        remixactive = randomfunction(0, 11);
        playSample(allsounds[remixactive]);
    }
    function randomfunction(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    document.querySelector("#btn").addEventListener("click", RemixInterval);
})(l09 || (l09 = {}));
//# sourceMappingURL=script.js.map