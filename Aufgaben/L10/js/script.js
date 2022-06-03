let addbutton = document.getElementById("#addbutton");
let count = 1;
let taskdiv = document.getElementById("tasks");
document.querySelector("#addnewtask").addEventListener("click", addTask);
function addTask() {
    let i = 7;
    var creatediv = document.createElement("div");
    creatediv.className = "task_container" + i;
    taskdiv.appendChild(creatediv);
    var createfirstdiv = document.createElement("div");
    createfirstdiv.className = "task_one" + i;
    var createcheck = document.createElement("div");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");
    var innertaskcontainer = document.querySelector(".task_container" + i);
    innertaskcontainer.appendChild(createfirstdiv);
    var createseconddiv = document.createElement("div");
    createseconddiv.className = "task_two" + i;
    var innertaskone = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);
}
//add Div mit class="task_container"
//add Div mit class="first_task1"
//add i mit class="fa-regular fa-circle fa-2xl"
//add Div mit class="first_task2"
//add p mit class="task1_text" "input"
//add Div mit class="first_task3"
//add i mit class="fa-regular fa-trash-can fa-2xl"
//# sourceMappingURL=script.js.map