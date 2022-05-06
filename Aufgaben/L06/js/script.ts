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

console.log(
     land_de + " hat " + einwohnerzahl_de + " Mio Einwohnerinnen und Einwohner im Jahr 2021. Relativ zur Gesamtzahl der Einwohner der EU sind das " + gesamtzahl_pr_de.toFixed(1).slice(2) + 
     "%. Die Einwohnerwachstumsrate von " + land_de + " zwischen 2008 und 2021 beträgt " + wachstumsrate_pr_de.toFixed(2).slice(2) + "%. Das ist ein Zuwachs von " + wachstumsrate_de.toFixed(2) + " Mio Menschen.\n \n" +
     land_fr + " hat " + einwohnerzahl_fr + " Mio Einwohnerinnen und Einwohner im Jahr 2021. Relativ zur Gesamtzahl der Einwohner der EU sind das " + gesamtzahl_pr_fr.toFixed(1).slice(2) + 
     "%. Die Einwohnerwachstumsrate von " + land_fr + " zwischen 2008 und 2021 beträgt " + wachstumsrate_pr_fr.toFixed(2).slice(2) + "%. Das ist ein Zuwachs von " + wachstumsrate_fr.toFixed(2) + " Mio Menschen.\n \n" +
     land_it + " hat " + einwohnerzahl_it + " Mio Einwohnerinnen und Einwohner im Jahr 2021. Relativ zur Gesamtzahl der Einwohner der EU sind das " + gesamtzahl_pr_it.toFixed(1).slice(2) + 
     "%. Die Einwohnerwachstumsrate von " + land_it + " zwischen 2008 und 2021 beträgt " + wachstumsrate_pr_it.toFixed(2).slice(2) + "%. Das ist ein Zuwachs von " + wachstumsrate_it.toFixed(2) + " Mio Menschen.\n \n" +
     land_ir + " hat " + einwohnerzahl_ir + " Mio Einwohnerinnen und Einwohner im Jahr 2021. Relativ zur Gesamtzahl der Einwohner der EU sind das " + gesamtzahl_pr_ir.toFixed(1).slice(2) + 
     "%. Die Einwohnerwachstumsrate von " + land_ir + " zwischen 2008 und 2021 beträgt " + wachstumsrate_pr_ir.toFixed(1).slice(2) + "%. Das ist ein Zuwachs von " + wachstumsrate_ir.toFixed(2) + " Mio Menschen."
)