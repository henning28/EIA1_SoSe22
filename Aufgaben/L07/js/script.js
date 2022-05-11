var einwohnerzahl_eu = 447.7;
var land_de = 'Deutschland';
var einwohnerzahl_de = 83.16;
var einwohnerzahl_de_08 = 82;
var gesamtzahl_pr_de = (einwohnerzahl_eu / einwohnerzahl_de) * 100;
var wachstumsrate_pr_de = (einwohnerzahl_de / einwohnerzahl_de_08) * 100;
var wachstumsrate_de = einwohnerzahl_de - einwohnerzahl_de_08;
var land_fr = 'Frankreich';
var einwohnerzahl_fr = 65.3;
var einwohnerzahl_fr_08 = 62.14;
var gesamtzahl_pr_fr = (einwohnerzahl_eu / einwohnerzahl_fr) * 100;
var wachstumsrate_pr_fr = (einwohnerzahl_fr / einwohnerzahl_fr_08) * 100;
var wachstumsrate_fr = einwohnerzahl_fr - einwohnerzahl_fr_08;
var land_it = 'Italien';
var einwohnerzahl_it = 59.58;
var einwohnerzahl_it_08 = 59;
var gesamtzahl_pr_it = (einwohnerzahl_eu / einwohnerzahl_it) * 100;
var wachstumsrate_pr_it = (einwohnerzahl_it / einwohnerzahl_it_08) * 100;
var wachstumsrate_it = einwohnerzahl_it - einwohnerzahl_it_08;
var land_ir = 'Irland';
var einwohnerzahl_ir = 5.04;
var einwohnerzahl_ir_08 = 4.52;
var gesamtzahl_pr_ir = (einwohnerzahl_eu / einwohnerzahl_ir) * 100;
var wachstumsrate_pr_ir = (einwohnerzahl_ir / einwohnerzahl_ir_08) * 100;
var wachstumsrate_ir = einwohnerzahl_ir - einwohnerzahl_ir_08;
// function consoleOutput(land_name: string, land_einwohnerzahl: number, land_gesamtzahl_pr: number, land_wachstumsrate_pr:number, land_wachstumsrate:number) {
//     console.log(land_name + " hat " + land_einwohnerzahl + " Mio Einwohnerinnen und Einwohner im Jahr 2021. Relativ zur Gesamtzahl der Einwohner der EU sind das " + gesamtzahl_pr_de.toFixed(1).slice(2) + 
//     "%. Die Einwohnerwachstumsrate von " + land_name + " zwischen 2008 und 2021 beträgt " + wachstumsrate_pr_de.toFixed(2).slice(2) + "%. Das ist ein Zuwachs von " + wachstumsrate_de.toFixed(2) + " Mio Menschen.")
// }
// consoleOutput(land_de, einwohnerzahl_de, gesamtzahl_pr_de, wachstumsrate_pr_de, wachstumsrate_de);
// consoleOutput(land_fr, einwohnerzahl_fr, gesamtzahl_pr_fr, wachstumsrate_pr_fr, wachstumsrate_fr);
// consoleOutput(land_it, einwohnerzahl_it, gesamtzahl_pr_it, wachstumsrate_pr_it, wachstumsrate_it);
// consoleOutput(land_ir, einwohnerzahl_ir, gesamtzahl_pr_ir, wachstumsrate_pr_ir, wachstumsrate_ir);
// const myParagraph: HTMLParagraphElement = document.createElement("p");
// myParagraph.className = "myClass";
// myParagraph.innerText = "Hello World";
// const myWrapper: HTMLDivElement = document.getElementById("wrapper") as HTMLDivElement
// myWrapper.appendChild(myParagraph)
//console.log(myWrapper);
const germany = document.getElementById("germany");
germany.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = "83,16 Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = "8,4%";
    document.getElementById("var_wachstumsrate_pr").innerText = "1,41%";
    document.getElementById("var_wachstumsrate").innerText = "1,16 Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2021";
});
//# sourceMappingURL=script.js.map