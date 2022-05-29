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

function Interval(): void {
    if (!interval) {
        interval = setInterval(playInterval, 500);
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

function stopInterval(): void {
    clearInterval(interval);
    interval = null;
    if (active != 0) {
        active = 0;
    }
}

// document.querySelector("#playbutton").addEventListener("click", function(): void {
//     if (document.querySelector("#playbutton div").getAttribute("class") == "fa-solid fa-stop fa-7x" && 
//         document.querySelector("#playbutton div").getAttribute("id") == "stop"
//     ) {
//         document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-play fa-7x");
//         document.querySelector("#playbutton div").setAttribute("id", "play");
//     } else {
//         document.querySelector("#playbutton div").setAttribute("class", "fa-solid fa-stop fa-7x");
//         document.querySelector("#playbutton div").setAttribute("id", "stop");
// }
// });

// document.querySelector("#play").addEventListener("click", function(): void {
//     document.querySelector("#play").classList.remove("fa-play");
//     if (document.querySelector("#play").getAttribute("class") == "fa-solid fa-play fa-7x" &&
//         document.querySelector("#play").getAttribute("id") == "play"
//     ) {
//         document.querySelector("#stop").setAttribute("class", "fa-solid fa-stop fa-7x");
//         document.querySelector("#stop").setAttribute("id", "stop");
//     } else {
//         document.querySelector("#play").setAttribute("class", "fa-solid fa-stop fa-7x");
//         document.querySelector("#play").setAttribute("id", "play");
//     }
// });


document.querySelector("#playbutton div").addEventListener("click", function(): void {
    document.querySelector("#playbutton div").classList.remove("fa-play");
    document.querySelector("#playbutton div").classList.add("fa-stop");
    document.querySelector("#playbutton div").removeAttribute("id");
    document.querySelector("#playbutton div").setAttribute("id", "stop");
});


document.querySelector("#play").addEventListener("click", Interval);
document.querySelector("#stop").addEventListener("click", stopInterval);
// document.querySelector("#playbutton #stop").addEventListener("click", function(): void {
//     document.querySelector("#stop").classList.remove("fa-stop");
//     document.querySelector("#stop").classList.add("fa-play");
// });



// REMIX

var remixsounds: string [] = ["a.mp3", "b.mp3", "c.mp3", "d.mp3", "e.mp3", "f.mp3", "g.mp3", "af.mp3", "bf.mp3", "df.mp3", "ef.mp3", "gf.mp3"];

var btncontainer: HTMLDivElement = document.querySelector("#remix_container");
let remixinterval: number;
var newactive: number = 0;
var randomnumber: number = Math.floor(Math.random() * 11 + 1);

// setInterval(randomfunction, 500);

// function randomfunction(): any {
//     setInterval( function(): void {
//         console.log(Math.floor(Math.random() * 11 + 1));
//     },           500);
// }

// (setInterval(function(): void {
//     Math.floor(Math.random() * 11 + 1);
// },           500));

function RemixInterval(): void {

if (!remixinterval) {
    remixinterval = setInterval(playRemixInterval, 500);
    }
}
    

function playRemixInterval(): void {

    if (btncontainer.className === "go") {
        var remixsound: HTMLAudioElement = new Audio("assets/keyboard/" + remixsounds[(setInterval(function(): void {
            Math.floor(Math.random() * 11 + 1);
        },                                                                                         500))
    ]);
        
        remixsound.play();
        newactive++;
        if (newactive == 12) {
            newactive = 0;
        }
    // } else {
    //   playbutton.className = "stop";  
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


