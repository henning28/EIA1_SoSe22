// Variablen
let bar = document.getElementById("bar"); // Balken der dem User seinen Fortschritt anzeigt
let sentenceindex = 0; // Zahl die angibt wie viele Sätze der User richtig hat & bei welchem Satz im sentence Array er ist
let sentencescomplete = 0; // Zahl die anzeigt wie viele Sätze der User abgeschlossen hat
let difficultysentences = 0; // Zahl die anzeigt was die Gesamtzahl der Sätze ist (abhängig von der Schwierigkeitsstufe)
let pointamount = 0; // Zahl die den Punktestand des Users zählt
let wordarray = []; // leeres Array um die richtigen Wörter die der User anklickt zu speichern
let barwidth = 0; // Zahl die die Breite des Fortschrittsbalken des Users speichert
// Variable die alle Sätze in einem Array speichert
let sentences = [
    {
        sentence: "yo soy así",
        translation: "Mir geht es gut",
        words: ["yo", "soy", "así"],
        randomwords: ["yo", "soy", "así"]
    },
    {
        sentence: "Buenas noches",
        translation: "Guten Abend",
        words: ["Buenas", "noches"],
        randomwords: ["Buenas", "noches"]
    },
    {
        sentence: "¿Cómo te llamas?",
        translation: "Wie heißt du?",
        words: ["¿Cómo", "te", "llamas?"],
        randomwords: ["¿Cómo", "te", "llamas?"]
    },
    {
        sentence: "Que aproveche!",
        translation: "Guten Appetit",
        words: ["Que", "aproveche!"],
        randomwords: ["Que", "aproveche!"]
    },
    {
        sentence: "La cuenta, por favor",
        translation: "Die Rechnung bitte",
        words: ["La", "cuenta,", "por", "favor"],
        randomwords: ["La", "cuenta,", "por", "favor"]
    },
    {
        sentence: "Soy de berlino",
        translation: "Ich komme aus Berlin",
        words: ["Soy", "de", "berlino"],
        randomwords: ["Soy", "de", "berlino"]
    },
    {
        sentence: "No hablo mucho español",
        translation: "Ich spreche nicht viel Spanisch",
        words: ["No", "hablo", "mucho", "español"],
        randomwords: ["No", "hablo", "mucho", "español"]
    },
    {
        sentence: "Tengo una reserva",
        translation: "Ich habe reserviert",
        words: ["Tengo", "una", "reserva"],
        randomwords: ["Tengo", "una", "reserva"]
    },
    {
        sentence: "¿Cuánto cuesta esto?",
        translation: "Was kostet das?",
        words: ["¿Cuánto", "cuesta", "esto?"],
        randomwords: ["¿Cuánto", "cuesta", "esto?"]
    },
    {
        sentence: "Sólo estoy mirando",
        translation: "Ich schaue mich nur um",
        words: ["Sólo", "estoy", "mirando"],
        randomwords: ["Sólo", "estoy", "mirando"]
    },
    {
        sentence: "Para beber una cerveza, por favor",
        translation: "Ich möchte ein Bier bestellen",
        words: ["Para", "beber", "una", "cerveza,", "por", "favor"],
        randomwords: ["Para", "beber", "una", "cerveza,", "por", "favor"]
    },
    {
        sentence: "¿Hay una habitación libre?",
        translation: "Haben Sie ein Zimmer frei?",
        words: ["¿Hay", "una", "habitación", "libre?"],
        randomwords: ["¿Hay", "una", "habitación", "libre?"]
    },
    {
        sentence: "¿Cómo se pronuncia esto?",
        translation: "Wie spricht man das aus?",
        words: ["¿Cómo", "se", "pronuncia", "esto?"],
        randomwords: ["¿Cómo", "se", "pronuncia", "esto?"]
    },
    {
        sentence: "Dónde está la biblioteca?",
        translation: "Wo ist die Bibliothek?",
        words: ["Dónde", "está", "la", "biblioteca?"],
        randomwords: ["Dónde", "está", "la", "biblioteca?"]
    },
    {
        sentence: "Por favor, ¡limpie la habitación!",
        translation: "Bitte reinigen Sie mein Zimmer",
        words: ["Por", "favor,", "¡limpie", "la", "habitación!"],
        randomwords: ["Por", "favor,", "¡limpie", "la", "habitación!"]
    }
];
// ordnet die Sätze mit ihren Übersetzungen und Wörter zufällig an
sentences.sort(() => Math.random() - 0.5); // hier kommt entweder eine positive oder negative Zahl raus und die funktion sortiert sie zufällig
// ordnet die Wörter mit denen die "Wörterboxen" gefüllt werden zufällig an
randomizeArray(sentences[0].randomwords);
randomizeArray(sentences[1].randomwords);
randomizeArray(sentences[2].randomwords);
randomizeArray(sentences[3].randomwords);
randomizeArray(sentences[4].randomwords);
randomizeArray(sentences[5].randomwords);
randomizeArray(sentences[6].randomwords);
randomizeArray(sentences[7].randomwords);
randomizeArray(sentences[8].randomwords);
randomizeArray(sentences[9].randomwords);
randomizeArray(sentences[10].randomwords);
randomizeArray(sentences[11].randomwords);
randomizeArray(sentences[12].randomwords);
randomizeArray(sentences[13].randomwords);
randomizeArray(sentences[14].randomwords);
function randomizeArray(array) {
    array.sort(() => Math.random() - 0.5); // hier kommt entweder eine positive oder negative Zahl raus und die funktion sortiert sie zufällig
}
// addHTML: bei jeder Schwierigkeitsstufe gleich, das Grundgerüst wird ausgelegt
// sentenceAmount: abhängig davon welche Schwierigkeitsstufe der User auswählt werden die Anzahl der Sätze festgelegt
document.getElementById("leicht").addEventListener("click", function () {
    addHTML();
    sentenceAmount(5);
});
document.getElementById("mittel").addEventListener("click", function () {
    addHTML();
    sentenceAmount(10);
});
document.getElementById("schwer").addEventListener("click", function () {
    addHTML();
    sentenceAmount(15);
});
// Grundgerüst in das später die zwei Sätze und Wörterboxen eingefügt werden
function addHTML() {
    bar.style.width = "0px"; // die Fortschrittsleiste wird auf 0 gesetzt da der User noch keinen Satz abgeschlossen hat
    // Schwierigkeitsstufen entfernen
    let difficulties = document.querySelector(".difficulty_wrapper");
    difficulties.parentNode.removeChild(difficulties);
    // Sätzefortschritt erstellen
    var createsentenceprogresswrapper = document.createElement("div");
    createsentenceprogresswrapper.className = "sentence_progresswrapper";
    document.getElementById("header").appendChild(createsentenceprogresswrapper);
    var createsentenceprogress = document.createElement("p");
    createsentenceprogress.className = "sentence_progress";
    createsentenceprogress.innerHTML = "Satz 0/5";
    createsentenceprogress.setAttribute("id", String("sentenceprogress"));
    createsentenceprogresswrapper.appendChild(createsentenceprogress);
    // Punktestand erstellen
    var createpointscontainer = document.createElement("div");
    createpointscontainer.className = "points_container";
    document.getElementById("header").appendChild(createpointscontainer);
    var createpoints = document.createElement("p");
    createpoints.className = "points";
    createpoints.setAttribute("id", String("points"));
    createpoints.innerHTML = "Punkte: 0";
    createpointscontainer.appendChild(createpoints);
    // Sätze erstellen
    var createsentencewrapper = document.createElement("div");
    createsentencewrapper.className = "sentence_wrapper";
    createsentencewrapper.setAttribute("id", String("sentence_wrapper"));
    document.getElementById("main").appendChild(createsentencewrapper);
    var createsentencecontainer = document.createElement("div");
    createsentencecontainer.className = "sentence_container";
    createsentencecontainer.setAttribute("id", String("sentence_container"));
    createsentencewrapper.appendChild(createsentencecontainer);
    var createfirstsentence = document.createElement("p");
    createfirstsentence.className = "first_sentence";
    createfirstsentence.setAttribute("id", String("first_sentence"));
    createsentencecontainer.appendChild(createfirstsentence);
    var createsecondsentence = document.createElement("p");
    createsecondsentence.className = "second_sentence";
    createsecondsentence.setAttribute("id", String("second_sentence"));
    createsentencecontainer.appendChild(createsecondsentence);
    var createwordboxcontainer = document.createElement("div");
    createwordboxcontainer.className = "wordbox_container";
    createwordboxcontainer.setAttribute("id", String("wordbox_container"));
    document.getElementById("main").appendChild(createwordboxcontainer);
    var createwordcontainer = document.createElement("div");
    createwordcontainer.className = "word_container";
    createwordcontainer.setAttribute("id", String("word_container"));
    createwordboxcontainer.appendChild(createwordcontainer);
    addTranslation();
    addWordboxes();
    fillwordboxes();
}
// deutsche Übersetzung des sentenceindex'en Satzes wird in "first_sentence" angezeigt
function addTranslation() {
    document.getElementById("first_sentence").innerHTML = sentences[sentenceindex].translation;
}
// 6 Wörterboxen werden erstellt
function addWordboxes() {
    var createfirstwords = document.createElement("div");
    createfirstwords.className = "words";
    createfirstwords.setAttribute("id", String("firstwords"));
    document.querySelector(".word_container").appendChild(createfirstwords);
    var createfirstword = document.createElement("p");
    createfirstword.setAttribute("id", String("firstword"));
    createfirstword.className = "word";
    createfirstwords.appendChild(createfirstword);
    var createsecondwords = document.createElement("div");
    createsecondwords.className = "words";
    createsecondwords.setAttribute("id", String("secondwords"));
    document.querySelector(".word_container").appendChild(createsecondwords);
    var createsecondword = document.createElement("p");
    createsecondword.setAttribute("id", String("secondword"));
    createsecondword.className = "word";
    createsecondwords.appendChild(createsecondword);
    var createthirdwords = document.createElement("div");
    createthirdwords.className = "words";
    createthirdwords.setAttribute("id", String("thirdwords"));
    document.querySelector(".word_container").appendChild(createthirdwords);
    var createthirdword = document.createElement("p");
    createthirdword.setAttribute("id", String("thirdword"));
    createthirdword.className = "word";
    createthirdwords.appendChild(createthirdword);
    var createfourthwords = document.createElement("div");
    createfourthwords.className = "words";
    createfourthwords.setAttribute("id", String("fourthwords"));
    document.querySelector(".word_container").appendChild(createfourthwords);
    var createfourthword = document.createElement("p");
    createfourthword.setAttribute("id", String("fourthword"));
    createfourthword.className = "word";
    createfourthwords.appendChild(createfourthword);
    var createfifthwords = document.createElement("div");
    createfifthwords.className = "words";
    createfifthwords.setAttribute("id", String("fifthwords"));
    document.querySelector(".word_container").appendChild(createfifthwords);
    var createfifthword = document.createElement("p");
    createfifthword.setAttribute("id", String("fifthword"));
    createfifthword.className = "word";
    createfifthwords.appendChild(createfifthword);
    var createsixthwords = document.createElement("div");
    createsixthwords.className = "words";
    createsixthwords.setAttribute("id", String("sixthwords"));
    document.querySelector(".word_container").appendChild(createsixthwords);
    var createsixthword = document.createElement("p");
    createsixthword.setAttribute("id", String("sixthword"));
    createsixthword.className = "word";
    createsixthwords.appendChild(createsixthword);
    // EventListeners der Wörterboxen
    createfirstwords.addEventListener("click", function () {
        // Wenn Element existiert dann führe Funktion aus
        if (typeof (createfirstwords) != "undefined" && createfirstwords != null) {
            // Funktion für die Buttonclick Animation
            createfirstwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createfirstwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[0]); // füge Wort des Satzes dem spanischen Satz hinzuzufügen
    });
    createsecondwords.addEventListener("click", function () {
        if (typeof (createsecondwords) != "undefined" && createsecondwords != null) {
            createsecondwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createsecondwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[1]);
    });
    createthirdwords.addEventListener("click", function () {
        if (typeof (createthirdwords) != "undefined" && createthirdwords != null) {
            createthirdwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createthirdwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[2]);
    });
    createfourthwords.addEventListener("click", function () {
        if (typeof (createfourthwords) != "undefined" && createfourthwords != null) {
            createfourthwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createfourthwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[3]);
    });
    createfifthwords.addEventListener("click", function () {
        if (typeof (createfifthwords) != "undefined" && createfifthwords != null) {
            createfifthwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createfifthwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[4]);
    });
    createsixthwords.addEventListener("click", function () {
        if (typeof (createsixthwords) != "undefined" && createsixthwords != null) {
            createfifthwords.style.transform = "scale(0.9)";
            setTimeout(function () {
                createfifthwords.style.transform = "scale(1)";
            }, 80);
        }
        mainFunction(sentences[sentenceindex].randomwords[5]);
    });
}
// Fülle die Wörterboxen mit zufälligen Wörtern des Satzes
function fillwordboxes() {
    document.getElementById("firstword").innerHTML = sentences[sentenceindex].randomwords[0];
    document.getElementById("secondword").innerHTML = sentences[sentenceindex].randomwords[1];
    document.getElementById("thirdword").innerHTML = sentences[sentenceindex].randomwords[2];
    document.getElementById("fourthword").innerHTML = sentences[sentenceindex].randomwords[3];
    document.getElementById("fifthword").innerHTML = sentences[sentenceindex].randomwords[4];
    document.getElementById("sixthword").innerHTML = sentences[sentenceindex].randomwords[5];
    // Wenn ein Wort nicht definiert ist dann entferne die zugehörige Wörterbox
    if (sentences[sentenceindex].randomwords[0] == undefined) {
        document.getElementById("firstwords").parentNode.removeChild(document.getElementById("firstwords"));
    }
    if (sentences[sentenceindex].randomwords[1] == undefined) {
        document.getElementById("secondwords").parentNode.removeChild(document.getElementById("secondwords"));
    }
    if (sentences[sentenceindex].randomwords[2] == undefined) {
        document.getElementById("thirdwords").parentNode.removeChild(document.getElementById("thirdwords"));
    }
    if (sentences[sentenceindex].randomwords[3] == undefined) {
        document.getElementById("fourthwords").parentNode.removeChild(document.getElementById("fourthwords"));
    }
    if (sentences[sentenceindex].randomwords[4] == undefined) {
        document.getElementById("fifthwords").parentNode.removeChild(document.getElementById("fifthwords"));
    }
    if (sentences[sentenceindex].randomwords[5] == undefined) {
        document.getElementById("sixthwords").parentNode.removeChild(document.getElementById("sixthwords"));
    }
}
// Funktion um Anzahl der Sätze zu zeigen (Abhängig davon welche Schwierigkeit der User auswählt)
function sentenceAmount(amount) {
    document.querySelector(".sentence_progress").innerHTML = "Satz 0/" + amount;
    difficultysentences = amount;
}
// Hauptfunktion
function mainFunction(newword) {
    // Wörter als Variablen speichern
    let firstwords = document.getElementById("firstwords");
    let secondwords = document.getElementById("secondwords");
    let thirdwords = document.getElementById("thirdwords");
    let fourthwords = document.getElementById("fourthwords");
    let fifthwords = document.getElementById("fifthwords");
    let sixthwords = document.getElementById("sixthwords");
    // Variablen
    let secondsentence = document.getElementById("second_sentence");
    let sentenceinput = document.getElementById("second_sentence").innerHTML;
    let points = document.getElementById("points"); // Punkte des Users
    secondsentence.innerHTML = sentenceinput + newword; // Füge dem zweiten Satz das neue Wort zusätzlich hinzu
    wordarray.push(newword); // Füge das neue Wort dem wordarray hinzu
    if (wordarray.length == 1) { // Wenn das array 1 Wort lang ist dann...
        if (wordarray.indexOf(sentences[sentenceindex].words[0]) != 0) { // Wenn das angeklickte Wort nicht die Stelle 0 im sentencen[x].words hat dann...
            alert("wrong word, try again"); // alert
            secondsentence.innerHTML = ""; // falsches Wort also leere den Inhalt des zweiten Satzes wieder
            wordarray.length = 0; // falsches Wort deshalb streiche es aus dem Array (leere das Array)
            pointamount -= 1; // falsches Wort also Punktestand -1
        }
        else {
            pointamount += 1; // richtiges Wort also Punktestand +1
        }
        secondsentence.innerHTML = secondsentence.innerHTML + " "; // ...füge ein Leerzeichen ein damit die Wörter nicht zusammenstehen
    }
    if (wordarray.length == 2) { // Wenn das array 2 Wörter lang ist dann...
        if (wordarray.indexOf(sentences[sentenceindex].words[1]) != 1) { // Wenn das angeklickte Wort nicht die Stelle 1 im sentencen[x].words hat dann...
            alert("wrong word, try again");
            secondsentence.innerHTML = sentences[sentenceindex].words[0]; // setze den Satzinhalt auf die richtigen Wörter davor zurück
            wordarray.length = 1; // behalte nur das erste Wort bei
            pointamount -= 1;
        }
        else {
            pointamount += 1;
        }
        secondsentence.innerHTML = secondsentence.innerHTML + " ";
    }
    if (wordarray.length == 3) { // Wenn das array 3 Wörter lang ist dann...
        if (wordarray.indexOf(sentences[sentenceindex].words[2]) != 2) { // Wenn das angeklickte Wort nicht die Stelle 2 im sentencen[x].words hat dann...
            alert("wrong word, try again");
            secondsentence.innerHTML = sentences[sentenceindex].words[0] + " " + sentences[sentenceindex].words[1];
            wordarray.length = 2; // behalte nur die ersten zwei Wörter bei
            pointamount -= 1;
        }
        else {
            pointamount += 1;
        }
        secondsentence.innerHTML = secondsentence.innerHTML + " ";
    }
    if (wordarray.length == 4) { // Wenn das array 4 Wörter lang ist dann...
        if (wordarray.indexOf(sentences[sentenceindex].words[3]) != 3) { // Wenn das angeklickte Wort nicht die Stelle 3 im sentencen[x].words hat dann...
            alert("wrong word, try again");
            secondsentence.innerHTML = sentences[sentenceindex].words[0] + " " + sentences[sentenceindex].words[1] + " " + sentences[sentenceindex].words[2]; // setze den Satzinhalt auf die richtigen Wörter davor zurück
            wordarray.length = 3; // behalte nur die ersten drei Wörter bei
            pointamount -= 1;
        }
        else {
            pointamount += 1;
        }
        secondsentence.innerHTML = secondsentence.innerHTML + " ";
    }
    if (wordarray.length == 5) { // Wenn das array 5 Wörter lang ist dann...
        if (wordarray.indexOf(sentences[sentenceindex].words[4]) != 4) { // Wenn das angeklickte Wort nicht die Stelle 4 im sentencen[x].words hat dann...
            alert("wrong word, try again");
            secondsentence.innerHTML = sentences[sentenceindex].words[0] + " " + sentences[sentenceindex].words[1] + " " + sentences[sentenceindex].words[2] + " " + sentences[sentenceindex].words[3];
            wordarray.length = 4; // behalte nur die ersten vier Wörter bei
            pointamount -= 1;
        }
        else {
            pointamount += 1;
        }
        secondsentence.innerHTML = secondsentence.innerHTML + " ";
    }
    if (pointamount == -1) { // Punktestand des Users kann nicht ins negative gehen
        pointamount = 0; // Falls der Punktestand -1 beträgt dann setze ihn auf 0
    }
    points.innerHTML = "Punkte: " + pointamount; // Punktestand des Users updaten
    // Wenn der Satzinhalt dem Satz entspricht (mit Leerzeichen davor oder danach) dann...
    if (secondsentence.innerHTML == sentences[sentenceindex].sentence ||
        secondsentence.innerHTML == " " + sentences[sentenceindex].sentence ||
        secondsentence.innerHTML == sentences[sentenceindex].sentence + " " ||
        secondsentence.innerHTML == " " + sentences[sentenceindex].sentence + " ") {
        wordarray.length = 0; // leere das Wortarray
        secondsentence.innerHTML = ""; // leere den Satzinhalt
        if (difficultysentences == 5) { // Falls die Schwierigkeitsstufe leicht ist (5 Sätze hat) dann...
            barwidth = barwidth + 160; // ...addiere mit jedem richtigen Satz 160px zur breite des Fortschrittbalken
            bar.style.width = barwidth + "px";
        }
        if (difficultysentences == 10) { // Falls die Schwierigkeitsstufe mittel ist (10 Sätze hat) dann...
            barwidth = barwidth + 80; // ...addiere mit jedem richtigen Satz 80px zur breite des Fortschrittbalken
            bar.style.width = barwidth + "px";
        }
        if (difficultysentences == 15) { // Falls die Schwierigkeitsstufe schwer ist (15 Sätze hat) dann...
            barwidth = barwidth + 53.33; // ...addiere mit jedem richtigen Satz 53px zur breite des Fortschrittbalken
            bar.style.width = barwidth + "px";
        }
        sentencescomplete += 1; // ändere die Anzahl der abgeschlossenen Sätze um +1
        document.getElementById("sentenceprogress").innerHTML = "Satz " + sentencescomplete + "/" + difficultysentences; // update die Anzahl der abgeschlossenen Sätze auf HTML-Ebene
        secondsentence.style.backgroundColor = "rgb(152, 236, 152)"; // Färbe den Hintergrund grün für 1 Sekunde (hängt mit SetTimeout zusammen)
        secondsentence.innerHTML = sentences[sentenceindex].sentence; // Zeige den ganzen Satz für 1 Sekunde an (hängt mit SetTimeout zusammen)
        setTimeout(function () {
            secondsentence.innerHTML = "";
            secondsentence.style.backgroundColor = "rgb(230, 230, 230)";
        }, 1000);
        // entferne die ersten zwei Wörterboxen (nicht wie bei den unteren da jerder Satz mindestens zwei Wörter hat)
        firstwords.parentNode.removeChild(firstwords);
        secondwords.parentNode.removeChild(secondwords);
        // prüfe ob die Wörterbox exisitiert, wenn ja dann entferne sie
        if (typeof (thirdwords) != "undefined" && thirdwords != null) {
            thirdwords.parentNode.removeChild(thirdwords);
        }
        if (typeof (fourthwords) != "undefined" && fourthwords != null) {
            fourthwords.parentNode.removeChild(fourthwords);
        }
        if (typeof (fifthwords) != "undefined" && fifthwords != null) {
            fifthwords.parentNode.removeChild(fifthwords);
        }
        if (typeof (sixthwords) != "undefined" && sixthwords != null) {
            sixthwords.parentNode.removeChild(sixthwords);
        }
        // update die Zahl der Sätze die der User richtig hat / bei welchem Satz im Array der User ist
        sentenceindex += 1;
        if (sentencescomplete == difficultysentences) { // falls alle Sätze abgeschlossen sind führe folgende Funktionen aus
            removeHTML();
            addCongratulations();
        }
        else { // falls nicht dann wiederhole Prozess (Wörterboxen hinzufügen, Wörterboxen mit randomwords des Satzes füllen, überflüssige Wörterboxen entfernen und Übersetzung anzeigen)
            addWordboxes();
            fillwordboxes();
            addTranslation();
        }
    }
}
// Wörterboxen und Sätze entfernen
function removeHTML() {
    document.getElementById("sentence_container").parentNode.removeChild(document.getElementById("sentence_container"));
    document.getElementById("word_container").parentNode.removeChild(document.getElementById("word_container"));
    document.getElementById("sentenceprogress").parentNode.removeChild(document.getElementById("sentenceprogress"));
    document.getElementById("points").parentNode.removeChild(document.getElementById("points"));
}
// Congratulation-Screen anzeigen
function addCongratulations() {
    var createcongratulations = document.createElement("div"); // sentence_container erstellen
    createcongratulations.className = "sentence_container";
    createcongratulations.setAttribute("id", String("sentence_container"));
    document.getElementById("sentence_wrapper").appendChild(createcongratulations);
    var createcongratulationstext = document.createElement("p"); // Überschrift erstellen
    createcongratulationstext.className = "firstcongrats_sentence";
    createcongratulationstext.innerHTML = "Congratulations!"; // Überschrift schreiben
    createcongratulations.appendChild(createcongratulationstext);
    var createcongrats = document.createElement("div"); // congratsword_container erstellen
    createcongrats.className = "congratsword_container";
    document.getElementById("wordbox_container").appendChild(createcongrats);
    var createcongratstext = document.createElement("p");
    createcongratstext.className = "congratstext";
    createcongratstext.innerHTML = "Sie haben eine Gesamtpunktzahl von " + pointamount + " erreicht!"; // Zeigt die Gesamtpunktzahl des Nutzers an
    createcongrats.appendChild(createcongratstext);
}
//# sourceMappingURL=script.js.map