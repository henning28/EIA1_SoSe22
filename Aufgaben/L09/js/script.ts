
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

var sounds: string [] = ["a.mp3", "b.mp3", "a.mp3", "b.mp3", "e.mp3", "a.mp3", "c.mp3"];

function playInterval(): void {
    for (let active: number = 0; active <= 5; active++) {
        console.log(sounds[active]);
        setInterval(function(): void {
        var sound: HTMLAudioElement = new Audio("assets/keyboard/" + sounds[active]);
        sound.play();
    },
                    1500);
    }
}

document.querySelector("#playbutton").addEventListener("click", playInterval);