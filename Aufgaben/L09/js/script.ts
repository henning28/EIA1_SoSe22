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
var playbutton: HTMLDivElement = document.querySelector("#playbutton");
let interval: number;
let intervalstatus: boolean = false;
let remixintervalstatus: boolean = false;


function Interval(): void {
    if (intervalstatus == false) {
        intervalstatus = true;
        interval = setInterval(playInterval, 500);
    } else {
        intervalstatus = false;
        if (active != 0) {
            active = 0;
        }
        clearInterval(interval);
    }
}

function playInterval(): void {
    if (playbutton.className === "go") {
        var sound: HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
        sound.play();
        active++;
        if (active == 5) {
            active = 0;
        }
    }
}


document.querySelector("#playbutton").addEventListener("click", function(): void {
    if (document.querySelector("#playbutton div").getAttribute("class") == "fa-solid fa-stop fa-7x"
    ) {
        document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-play fa-7x");
    } else {
        document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-stop fa-7x");
}
});


document.querySelector("#play").addEventListener("click", Interval);


// REMIX

var remixsounds: string [] = ["a.mp3", "b.mp3", "c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "af.mp3", "bf.mp3", "df.mp3", "ef.mp3", "gf.mp3"];

var btncontainer: HTMLDivElement = document.querySelector("#remix_container");
let remixinterval: number;
var newactive: number;
var randomnumber: number = Math.floor(Math.random() * (12 - 1 + 1) + 1);


function RemixInterval(): void {

if (!remixinterval) {
    remixinterval = setInterval(playRemixInterval, 500);
    }
}
    

function playRemixInterval(): void {

    if (btncontainer.className === "go") {
        var remixsound: HTMLAudioElement = new Audio("assets/keyboard/" + remixsounds[newactive]);
        remixsound.play();
        newactive = (setInterval(function(): void {
            Math.floor(Math.random() * (12 - 1 + 1) + 1);
        },                       500));

    }
}
    
function stopRemixInterval(): void {
    clearInterval(remixinterval);
    remixinterval = null;
    if (newactive != 0) {
        newactive = 0;
    }
}

document.querySelector("#btn").addEventListener("click", playRemixInterval);
document.querySelector("#stopbtn").addEventListener("click", stopRemixInterval);


