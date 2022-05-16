var einwohnerzahl_eu : number = 447.7

var land_de: string = 'Deutschland' 
var einwohnerzahl_de: number = 83.16
var einwohnerzahl_de_08: number = 82
var gesamtzahl_pr_de : number = (einwohnerzahl_eu / einwohnerzahl_de) * 100
var wachstumsrate_pr_de : number = (einwohnerzahl_de / einwohnerzahl_de_08) * 100
var wachstumsrate_de : number = einwohnerzahl_de - einwohnerzahl_de_08

var land_fr: string = 'Frankreich' 
var einwohnerzahl_fr: number = 65.3
var einwohnerzahl_fr_08: number = 62.14
var gesamtzahl_pr_fr : number = (einwohnerzahl_eu / einwohnerzahl_fr) * 100
var wachstumsrate_pr_fr : number = (einwohnerzahl_fr / einwohnerzahl_fr_08) * 100
var wachstumsrate_fr : number = einwohnerzahl_fr - einwohnerzahl_fr_08

var land_it: string = 'Italien' 
var einwohnerzahl_it: number = 59.58
var einwohnerzahl_it_08: number = 59
var gesamtzahl_pr_it : number = (einwohnerzahl_eu / einwohnerzahl_it) * 100
var wachstumsrate_pr_it : number = (einwohnerzahl_it / einwohnerzahl_it_08) * 100
var wachstumsrate_it : number = einwohnerzahl_it - einwohnerzahl_it_08

var land_ir: string = 'Irland' 
var einwohnerzahl_ir: number = 5.04
var einwohnerzahl_ir_08: number = 4.52
var gesamtzahl_pr_ir : number = (einwohnerzahl_eu / einwohnerzahl_ir) * 100
var wachstumsrate_pr_ir : number = (einwohnerzahl_ir / einwohnerzahl_ir_08) * 100
var wachstumsrate_ir : number = einwohnerzahl_ir - einwohnerzahl_ir_08


const eu: HTMLImageElement = document.getElementById("eu") as HTMLImageElement;
eu.addEventListener("click", function (): void {
    document.getElementById("var_einwohner").innerText = "447,01 Mio"
    document.getElementById("var_gesamtzahl_pr").innerText = "100%"
    document.getElementById("var_wachstumsrate_pr").innerText = "ca 2,3%"
    document.getElementById("var_wachstumsrate").innerText = "ca. 10,01 Mio"
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in der EU im Jahr 2021"
}
)

const germany: HTMLDivElement = document.getElementById("germany") as HTMLDivElement;
germany.addEventListener("click", function (): void {
    document.getElementById("var_einwohner").innerText = einwohnerzahl_de.toFixed(2) + " Mio"
    document.getElementById("var_gesamtzahl_pr").innerText = gesamtzahl_pr_de.toFixed(2).slice(2) + " %"
    document.getElementById("var_wachstumsrate_pr").innerText = wachstumsrate_pr_de.toFixed(2).slice(2) + " %"
    document.getElementById("var_wachstumsrate").innerText = wachstumsrate_de.toFixed(2).slice(2) + " Mio"
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2021"
    germany.style.opacity = "100%"
    germany.style.transform = "scale(1.1)"
}
)

const france: HTMLDivElement = document.getElementById("france") as HTMLDivElement;
france.addEventListener("click", function (): void {
    document.getElementById("var_einwohner").innerText = "65,3 Mio"
    document.getElementById("var_gesamtzahl_pr").innerText = "5,6%"
    document.getElementById("var_wachstumsrate_pr").innerText = "5,09%"
    document.getElementById("var_wachstumsrate").innerText = "3,16 Mio"
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich in 2021"
    france.style.opacity = "100%"
    france.style.transform = "scale(1.1)"
}
)

const italy: HTMLDivElement = document.getElementById("italy") as HTMLDivElement;
italy.addEventListener("click", function (): void {
    document.getElementById("var_einwohner").innerText = "59,58 Mio"
    document.getElementById("var_gesamtzahl_pr").innerText = "1,4%"
    document.getElementById("var_wachstumsrate_pr").innerText = "0,98%"
    document.getElementById("var_wachstumsrate").innerText = "0,58 Mio"
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Italien im Jahr 2021"
    italy.style.opacity = "100%"
    italy.style.transform = "scale(1.1)"
}
)

const ireland: HTMLDivElement = document.getElementById("ireland") as HTMLDivElement;
ireland.addEventListener("click", function (): void {
    document.getElementById("var_einwohner").innerText = "5,04 Mio"
    document.getElementById("var_gesamtzahl_pr").innerText = "1,1%"
    document.getElementById("var_wachstumsrate_pr").innerText = "11,5%"
    document.getElementById("var_wachstumsrate").innerText = "0,52 Mio"
    document.getElementById("land_name").innerText = "Gesamtzahl Einwohnerinnen und Einwohner in Irland im Jahr 2021"
    ireland.style.opacity = "100%"
    ireland.style.transform = "scale(1.1)"
}
)

const euchart: HTMLDivElement = document.getElementById("chart") as HTMLDivElement
    eu.addEventListener("click" , function (): void {
    euchart.style.height = "100%"
}
)

const germanychart: HTMLDivElement = document.getElementById("chart") as HTMLDivElement
    germany.addEventListener("click" , function (): void {
    germanychart.style.height = "8.4%"
}
)

const francechart: HTMLDivElement = document.getElementById("chart") as HTMLDivElement
    france.addEventListener("click" , function (): void {
    francechart.style.height = "5.6%"
}
)

const italychart: HTMLDivElement = document.getElementById("chart") as HTMLDivElement
    italy.addEventListener("click" , function (): void {
    italychart.style.height = "1.4%"
}
)

const irelandchart: HTMLDivElement = document.getElementById("chart") as HTMLDivElement
    ireland.addEventListener("click" , function (): void {
    irelandchart.style.height = "1.1%"
}
)