
let addbutton: HTMLElement = document.getElementById("#addbutton");
let count: number = 1;
let i: number = 1;

let taskdiv: HTMLElement = document.getElementById("tasks");

let yes: HTMLElement = document.querySelector(".task_container");

// EventListeners

document.querySelector("#addnewtask").addEventListener("click", function(): void {
    addTask();
    clearInput(); 
});


// Functions

function addTask(): void {
    let userInput: string = document.querySelector("input").value;
    i++;

    var creatediv: HTMLDivElement = document.createElement("div");
    creatediv.className = "task_container" + i;
    taskdiv.appendChild(creatediv);
    creatediv.classList.add("task_containerstyle");

    var createfirstdiv: HTMLDivElement = document.createElement("div");
    createfirstdiv.className = "task_one" + i;
    createfirstdiv.classList.add("task_onestyle");

    var createseconddiv: HTMLDivElement = document.createElement("div");
    createseconddiv.className = "task_two" + i;
    createseconddiv.classList.add("task_twostyle");

    var createthirddiv: HTMLDivElement = document.createElement("div");
    createthirddiv.className = "task_three" + i;
    createthirddiv.classList.add("task_threestyle");

    var innertaskcontainer: HTMLDivElement = document.querySelector(".task_container" + i);
    innertaskcontainer.appendChild(createfirstdiv);
    innertaskcontainer.appendChild(createseconddiv);
    innertaskcontainer.appendChild(createthirddiv);

    var createcheck: HTMLDivElement = document.createElement("div");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");
    createcheck.classList.add("circle");

    var innertaskone: HTMLDivElement = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);

    var createtext: HTMLParagraphElement = document.createElement("p");
    createtext.classList.add("tasktext" + i);
    createtext.textContent = userInput;

    var innertasktwo: HTMLDivElement = document.querySelector(".task_two" + i);
    innertasktwo.appendChild(createtext);

    var createtrash: HTMLDivElement = document.createElement("div");
    createtrash.classList.add("fa-regular");
    createtrash.classList.add("fa-trash-can");
    createtrash.classList.add("fa-2xl");
    createtrash.classList.add("trash" + i);

    var innertaskthree: HTMLDivElement = document.querySelector(".task_three" + i);
    innertaskthree.appendChild(createtrash);

    document.getElementById("totaltasks").innerText = i + " in total";

}

function clearInput (): void {
    document.querySelector("input").value = "";
}


// delete Task

// function deleteTask (task: HTMLDivElement): void {
//     console.log(task);
//     task.remove();
// }

// document.querySelector(".trash" + i).addEventListener("click", function(): void {
//     deleteTask(document.querySelector(".task_container" + i));
//     i--;
// }
// );

// for (let u: number; yes.classList.contains(".task_container"); u++) {
//     u = i;
//     console.log(u);
//     document.querySelector(".trash" + u).addEventListener("click", function(): void {
//         deleteTask(document.querySelector("task_container" + i));
//     });
// }




// changeCheck

// [...document.querySelectorAll(".circle")].forEach(function(item) {
//     item.addEventListener("click", function(): void {
//         console.log("circle clicked");
//         changecheck();
//     });
// });

let circles: NodeList = document.querySelectorAll(".circle");

for (let s: number = 0; s < circles.length; s++) {
    circles[s].addEventListener("click", function(): void {
        console.log(s);
        changecheck();
    });
}



// document.querySelector(".task_container").addEventListener("click", function(): void {
//     changecheck();
// });

function changecheck (): void {
    if (document.querySelector(".task_onestyle div").getAttribute("class") == "fa-regular fa-circle-check fa-2xl"
    ) {
        document.querySelector(".task_onestyle div").setAttribute("class", "fa-regular fa-circle fa-2xl");
    } else {
        document.querySelector(".task_onestyle div").setAttribute("class", "fa-regular fa-circle-check fa-2xl");
}}
