let addbutton = document.getElementById("#addbutton");
let count = 1;
let i = 1;
let taskdiv = document.getElementById("tasks");
let yes = document.querySelector(".task_container");
// EventListeners
document.querySelector("#addnewtask").addEventListener("click", function () {
    addTask();
    clearInput();
});
document.querySelector(".fa-trash-can").addEventListener("click", deleteTask);
// Functions
function deleteTask() {
    yes.remove();
}
function addTask() {
    let userInput = document.querySelector("input").value;
    i++;
    var creatediv = document.createElement("div");
    creatediv.className = "task_container" + i;
    taskdiv.appendChild(creatediv);
    creatediv.classList.add("task_containerstyle");
    var createfirstdiv = document.createElement("div");
    createfirstdiv.className = "task_one" + i;
    createfirstdiv.classList.add("task_onestyle");
    var createseconddiv = document.createElement("div");
    createseconddiv.className = "task_two" + i;
    createseconddiv.classList.add("task_twostyle");
    var createthirddiv = document.createElement("div");
    createthirddiv.className = "task_three" + i;
    createthirddiv.classList.add("task_threestyle");
    var innertaskcontainer = document.querySelector(".task_container" + i);
    innertaskcontainer.appendChild(createfirstdiv);
    innertaskcontainer.appendChild(createseconddiv);
    innertaskcontainer.appendChild(createthirddiv);
    var createcheck = document.createElement("div");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");
    var innertaskone = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);
    var createtext = document.createElement("p");
    createtext.classList.add("tasktext" + i);
    createtext.textContent = userInput;
    var innertasktwo = document.querySelector(".task_two" + i);
    innertasktwo.appendChild(createtext);
    var createtrash = document.createElement("div");
    createtrash.classList.add("fa-regular");
    createtrash.classList.add("fa-trash-can");
    createtrash.classList.add("fa-2xl");
    var innertaskthree = document.querySelector(".task_three" + i);
    innertaskthree.appendChild(createtrash);
    document.getElementById("totaltasks").innerText = i + " in total";
}
function clearInput() {
    document.querySelector("input").value = "";
}
// document.querySelector(".task_container").addEventListener("click", function(): void {
//     changecheck();
// });
function changecheck() {
    if (document.querySelector(".task_onestyle div").getAttribute("class") == "fa-regular fa-circle-check fa-2xl") {
        document.querySelector(".task_onestyle div").setAttribute("class", "fa-regular fa-circle fa-2xl");
    }
    else {
        document.querySelector(".task_onestyle div").setAttribute("class", "fa-regular fa-circle-check fa-2xl");
    }
}
//# sourceMappingURL=script.js.map