namespace keyboard {

function playSample(file: string): void {
    var sound: HTMLAudioElement = new Audio("assets/keyboard/" + file);
    sound.play();
}

document.querySelector("#a.whitekey").addEventListener("click", function(): void {
    playSample("a.mp3");
});
document.querySelector("#b.whitekey").addEventListener("click", function(): void {
    playSample("b.mp3");
});
document.querySelector("#c.whitekey").addEventListener("click", function(): void {
    playSample("c.mp3");
});
document.querySelector("#d.whitekey").addEventListener("click", function(): void {
    playSample("d.mp3");
});
document.querySelector("#e.whitekey").addEventListener("click", function(): void {
    playSample("e.mp3");
});
document.querySelector("#f.whitekey").addEventListener("click", function(): void {
    playSample("a.mp3");
});
document.querySelector("#g.whitekey").addEventListener("click", function(): void {
    playSample("g.mp3");
});

document.querySelector("#af.blackkey_two").addEventListener("click", function(): void {
    playSample("af.mp3");
});
document.querySelector("#bf.blackkey_two").addEventListener("click", function(): void {
    playSample("bf.mp3");
});
document.querySelector("#df.blackkey_three").addEventListener("click", function(): void {
    playSample("df.mp3");
});
document.querySelector("#ef.blackkey_three").addEventListener("click", function(): void {
    playSample("ef.mp3");
});
document.querySelector("#gf.blackkey_three").addEventListener("click", function(): void {
    playSample("gf.mp3");
});


var sounds: string [] = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3"];
var active: number = 0;
let clear: number = 0;
var playbutton: HTMLDivElement = document.querySelector("#playbutton");
var font: HTMLElement = document.querySelector("#font");

// playbutton.addEventListener("click", playInterval);

document.querySelector("#playbutton").addEventListener("click", function(): void {
   if (playbutton.getAttribute("class") == "stop") {
        playbutton.setAttribute("class", "start");
   } else {
        playbutton.setAttribute("class", "stop");
   }
});

document.querySelector(".start").addEventListener("click", () => {
    clear = setInterval(playInterval, 500);
});

document.querySelector(".stop").addEventListener("click", () => {
    clearInterval(clear);
});

function playInterval(): void {
    var sound: HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
    sound.play();
    active++;
    if (active == 5) {
        active = 0;
    }
}

font.addEventListener("click", function(): void {
    if (font.getAttribute("class") == "fa-solid fa-stop fa-10x") {
         font.setAttribute("class", "");
    } else {
         font.setAttribute("class", "fa-solid fa-stop fa-10x");
    }
 });


}


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
