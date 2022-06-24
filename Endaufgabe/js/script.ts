// add HTML

document.getElementById("leicht").addEventListener("click", addHTML);
document.getElementById("mittel").addEventListener("click", addHTML);
document.getElementById("schwer").addEventListener("click", addHTML);

function addHTML (): void {

    // Schwierigkeitsstufen entfernen

    let difficulties: HTMLDivElement = document.querySelector(".difficulty_wrapper");
    difficulties.parentNode.removeChild(difficulties);

    // Punktestand erstellen

    var createpointscontainer: HTMLDivElement = document.createElement("div");
    createpointscontainer.className = "points_container";
    document.getElementById("header").appendChild(createpointscontainer);

    var createpoints: HTMLParagraphElement = document.createElement("p");
    createpoints.className = "points";
    createpoints.innerHTML = "Points : 0";
    createpointscontainer.appendChild(createpoints);

    // Sätze erstellen

    var createsentencewrapper: HTMLDivElement = document.createElement("div");
    createsentencewrapper.className = "sentence_wrapper";
    document.getElementById("main").appendChild(createsentencewrapper);

    var createsentencecontainer: HTMLDivElement = document.createElement("div");
    createsentencecontainer.className = "sentence_container";
    createsentencewrapper.appendChild(createsentencecontainer);

    var createfirstsentence: HTMLParagraphElement = document.createElement("p");
    createfirstsentence.className = "first_sentence";
    createfirstsentence.setAttribute("id", String("first_sentence"));
    createsentencecontainer.appendChild(createfirstsentence);

    var createsecondsentence: HTMLParagraphElement = document.createElement("p");
    createsecondsentence.className = "second_sentence";
    createsecondsentence.setAttribute("id", String("second_sentence"));
    createsentencecontainer.appendChild(createsecondsentence);

    var createwordboxcontainer: HTMLDivElement = document.createElement("div");
    createwordboxcontainer.className = "wordbox_container";
    document.getElementById("main").appendChild(createwordboxcontainer);

    var createwordcontainer: HTMLDivElement = document.createElement("div");
    createwordcontainer.className = "word_container";
    createwordboxcontainer.appendChild(createwordcontainer);

    // Wörter erstellen

    var createfirstwords: HTMLDivElement = document.createElement("div");
    createfirstwords.className = "words";
    createfirstwords.setAttribute("id", String("firstwords"));
    createwordcontainer.appendChild(createfirstwords);

    var createfirstword: HTMLParagraphElement = document.createElement("p");
    createfirstword.setAttribute("id", String("firstword"));
    createfirstword.className = "word";
    createfirstwords.appendChild(createfirstword);


    var createsecondwords: HTMLDivElement = document.createElement("div");
    createsecondwords.className = "words";
    createsecondwords.setAttribute("id", String("secondwords"));
    createwordcontainer.appendChild(createsecondwords);

    var createsecondword: HTMLParagraphElement = document.createElement("p");
    createsecondword.setAttribute("id", String("secondword"));
    createsecondword.className = "word";
    createsecondwords.appendChild(createsecondword);


    var createthirdwords: HTMLDivElement = document.createElement("div");
    createthirdwords.className = "words";
    createthirdwords.setAttribute("id", String("thirdwords"));
    createwordcontainer.appendChild(createthirdwords);

    var createthirdword: HTMLParagraphElement = document.createElement("p");
    createthirdword.setAttribute("id", String("thirdword"));
    createthirdword.className = "word";
    createthirdwords.appendChild(createthirdword);


    var createfourthwords: HTMLDivElement = document.createElement("div");
    createfourthwords.className = "words";
    createfourthwords.setAttribute("id", String("fourthwords"));
    createwordcontainer.appendChild(createfourthwords);

    var createfourthword: HTMLParagraphElement = document.createElement("p");
    createfourthword.setAttribute("id", String("fourthword"));
    createfourthword.className = "word";
    createfourthwords.appendChild(createfourthword);


    var createfifthwords: HTMLDivElement = document.createElement("div");
    createfifthwords.className = "words";
    createfifthwords.setAttribute("id", String("fifthwords"));
    createwordcontainer.appendChild(createfifthwords);

    var createfifthword: HTMLParagraphElement = document.createElement("p");
    createfifthword.setAttribute("id", String("fifthword"));
    createfifthword.className = "word";
    createfifthwords.appendChild(createfifthword);


    var createsixthwords: HTMLDivElement = document.createElement("div");
    createsixthwords.className = "words";
    createsixthwords.setAttribute("id", String("sixthwords"));
    createwordcontainer.appendChild(createsixthwords);

    var createsixthword: HTMLParagraphElement = document.createElement("p");
    createsixthword.setAttribute("id", String("sixthword"));
    createsixthword.className = "word";
    createsixthwords.appendChild(createsixthword);

    // EventListeners für die Button Animation

    createfirstwords.addEventListener("click", function (): void {animatebutton("firstwords"); });
    createsecondwords.addEventListener("click", function (): void {animatebutton("secondwords"); });
    createthirdwords.addEventListener("click", function (): void {animatebutton("thirdwords"); });
    createfourthwords.addEventListener("click", function (): void {animatebutton("fourthwords"); });
    createfifthwords.addEventListener("click", function (): void {animatebutton("fifthwords"); });
    createsixthwords.addEventListener("click", function (): void {animatebutton("sixthwords"); });

    // Satz 1

    createfirstword.innerHTML = "yo";
    createsecondword.innerHTML = "soy";
    createthirdword.innerHTML = "así";

}

// Sentences

interface Sentences {
    sentence: string;
    translation: string;
    words: string[];
}

let yosoyasi: Sentences = {
    sentence: "yo soy así",
    translation: "Mir geht es gut",
    words: ["yo", "soy", "así"]
};

let secondsentence: HTMLElement = document.getElementById("second_sentence");

// erster Satz "yo soy así"


// document.getElementById("firstwords").addEventListener("click", function(): void {
//     addwordtosentence(" soy");
// });
// document.getElementById("secondwords").addEventListener("click", function(): void {
//     addwordtosentence("yo");
// });
// document.getElementById("thirdwords").addEventListener("click", function(): void {
//     addwordtosentence(" así");
// });

// Funktion für die Animation des Klicken auf Wörter

function animatebutton(idname: string): void {
    document.getElementById(idname).style.transform = "scale(0.9)";
    setTimeout(function(): void {
        document.getElementById(idname).style.transform = "scale(1)";
    },         80);
}

// let sentenceinput: string = document.getElementById("second_sentence").innerHTML;

let wordarray: string[] = [];

function addwordtosentence(newword: string): void {
    let sentenceinput: string = document.getElementById("second_sentence").innerHTML;
    secondsentence.innerHTML = sentenceinput + newword;
    wordarray.push(newword);
    // console.log(wordarray);
    if (wordarray.length == 1) {
        if (wordarray.indexOf(" yo") != 0) {
            alert("wrong word, try again");
            secondsentence.innerHTML = "";
            wordarray.length = 0;
            } 
        console.log(secondsentence.innerHTML); }

    if (wordarray.length == 2) {
        if (wordarray.indexOf(" soy") != 1) {
            alert("wrong word, try again");
            secondsentence.innerHTML = "yo";
            // secondsentence.innerHTML = "";
            wordarray.length = 1;
        } 
        console.log(secondsentence.innerHTML); }
    
    if (wordarray.length == 3) {
        if (wordarray.indexOf(" así") != 3) {
            // alert("wrong word, try again");
            // secondsentence.innerHTML = "yo soy";
            // secondsentence.innerHTML = "";
            // wordarray.length = 2;
            // console.log(wordarray); } 
            // console.log("yesss");
        }
        console.log(secondsentence.innerHTML); } 
}

// secondsentence.textContent.includes