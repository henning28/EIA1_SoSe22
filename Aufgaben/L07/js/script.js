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
const eu = document.getElementById("eu");
eu.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = "447,01 Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = "100%";
    document.getElementById("var_wachstumsrate_pr").innerText = "ca 2,3%";
    document.getElementById("var_wachstumsrate").innerText = "ca. 10,01 Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in der EU im Jahr 2021";
});
const germany = document.getElementById("germany");
germany.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = einwohnerzahl_de.toFixed(2) + " Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = gesamtzahl_pr_de.toFixed(2).slice(2) + " %";
    document.getElementById("var_wachstumsrate_pr").innerText = wachstumsrate_pr_de.toFixed(2).slice(2) + " %";
    document.getElementById("var_wachstumsrate").innerText = wachstumsrate_de.toFixed(2).slice(2) + " Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2021";
    germany.style.opacity = "100%";
    germany.style.transform = "scale(1.1)";
});
const france = document.getElementById("france");
france.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = "65,3 Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = "5,6%";
    document.getElementById("var_wachstumsrate_pr").innerText = "5,09%";
    document.getElementById("var_wachstumsrate").innerText = "3,16 Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2021";
    france.style.opacity = "100%";
    france.style.transform = "scale(1.1)";
});
const italy = document.getElementById("italy");
italy.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = "59,58 Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = "1,4%";
    document.getElementById("var_wachstumsrate_pr").innerText = "0,98%";
    document.getElementById("var_wachstumsrate").innerText = "0,58 Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Italien im Jahr 2021";
    italy.style.opacity = "100%";
    italy.style.transform = "scale(1.1)";
});
const ireland = document.getElementById("ireland");
ireland.addEventListener("click", function () {
    document.getElementById("var_einwohner").innerText = "5,04 Mio";
    document.getElementById("var_gesamtzahl_pr").innerText = "1,1%";
    document.getElementById("var_wachstumsrate_pr").innerText = "11,5%";
    document.getElementById("var_wachstumsrate").innerText = "0,52 Mio";
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Irland im Jahr 2021";
    ireland.style.opacity = "100%";
    ireland.style.transform = "scale(1.1)";
});
const euchart = document.getElementById("chart");
eu.addEventListener("click", function () {
    euchart.style.height = "100%";
});
const germanychart = document.getElementById("chart");
germany.addEventListener("click", function () {
    germanychart.style.height = "8.4%";
});
const francechart = document.getElementById("chart");
france.addEventListener("click", function () {
    francechart.style.height = "5.6%";
});
const italychart = document.getElementById("chart");
italy.addEventListener("click", function () {
    italychart.style.height = "1.4%";
});
const irelandchart = document.getElementById("chart");
ireland.addEventListener("click", function () {
    irelandchart.style.height = "1.1%";
});
//# sourceMappingURL=script.js.map