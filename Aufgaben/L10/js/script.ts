
let addbutton: HTMLElement = document.getElementById("#addbutton");
let count: number = 1;

let taskdiv: HTMLElement = document.getElementById("tasks");


document.querySelector("#addnewtask").addEventListener("click", addTask);

function addTask(): void {
    let i: number = 7;
    var creatediv: HTMLDivElement = document.createElement("div");
    creatediv.className = "task_container" + i;
    taskdiv.appendChild(creatediv);

    var createfirstdiv: HTMLDivElement = document.createElement("div");
    createfirstdiv.className = "task_one" + i;

    var createcheck: HTMLDivElement = document.createElement("div");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");

    var innertaskcontainer: HTMLDivElement = document.querySelector(".task_container" + i);
    innertaskcontainer.appendChild(createfirstdiv);

    var createseconddiv: HTMLDivElement = document.createElement("div");
    createseconddiv.className = "task_two" + i;

    var innertaskone: HTMLDivElement = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);
}












    //add Div mit class="task_container"
    //add Div mit class="first_task1"
    //add i mit class="fa-regular fa-circle fa-2xl"
    //add Div mit class="first_task2"
    //add p mit class="task1_text" "input"
    //add Div mit class="first_task3"
    //add i mit class="fa-regular fa-trash-can fa-2xl"