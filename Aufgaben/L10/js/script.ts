let addbutton: HTMLElement = document.getElementById("#addbutton");
let taskdiv: HTMLElement = document.getElementById("tasks");
let yes: HTMLElement = document.querySelector(".task_container");

var i: number = 0;

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
    creatediv.setAttribute("id", String("task" + i));

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

    var createcheck: HTMLElement = document.createElement("i");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");
    createcheck.classList.add("circle");
    createcheck.setAttribute("id", String("circle" + i));

    var innertaskone: HTMLDivElement = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);

    var createtext: HTMLParagraphElement = document.createElement("p");
    createtext.classList.add("tasktext" + i);
    createtext.textContent = userInput;

    var innertasktwo: HTMLDivElement = document.querySelector(".task_two" + i);
    innertasktwo.appendChild(createtext);

    var createtrash: HTMLElement = document.createElement("i");
    createtrash.classList.add("fa-regular");
    createtrash.classList.add("fa-trash-can");
    createtrash.classList.add("fa-2xl");
    createtrash.setAttribute("id", String("trash"));

    createtrash.addEventListener("click", deleteTask);

    var innertaskthree: HTMLDivElement = document.querySelector(".task_three" + i);
    innertaskthree.appendChild(createtrash);

    createcheck.addEventListener("click", checktask);

    function checktask(): void {
        if (createcheck.getAttribute("class") == "fa-regular fa-circle-check fa-2xl") {
            createcheck.setAttribute("class", "fa-regular fa-circle fa-2xl");
        }
        else {
            createcheck.setAttribute("class", "fa-regular fa-circle-check fa-2xl"); 
        }
    }

    createtrash.addEventListener("click", deleteTask);
    createtrash.addEventListener("click", count);

    function deleteTask(): void {
        creatediv.parentElement.removeChild(creatediv);
    }

}

// count

let countnumber: any = document.getElementById("count");
let newnumber: number = 0;

document.querySelector("#addnewtask").addEventListener("click", add);

function add(): void {
    newnumber += 1;
    countnumber.innerHTML = newnumber + " in total";
}

function count(): void {
    newnumber -= 1;
    countnumber.innerHTML = newnumber + " in total";
}

// clear Input

function clearInput (): void {
    document.querySelector("input").value = "";
}
