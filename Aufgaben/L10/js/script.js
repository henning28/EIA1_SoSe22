let addbutton = document.getElementById("#addbutton");
let taskdiv = document.getElementById("tasks");
let yes = document.querySelector(".task_container");
var i = 0;
// EventListeners
document.querySelector("#addnewtask").addEventListener("click", function () {
    addTask();
    clearInput();
});
// Functions
function addTask() {
    let userInput = document.querySelector("input").value;
    i++;
    var creatediv = document.createElement("div");
    creatediv.className = "task_container" + i;
    taskdiv.appendChild(creatediv);
    creatediv.classList.add("task_containerstyle");
    creatediv.setAttribute("id", String("task" + i));
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
    var createcheck = document.createElement("i");
    createcheck.classList.add("fa-regular");
    createcheck.classList.add("fa-circle");
    createcheck.classList.add("fa-2xl");
    createcheck.classList.add("circle");
    createcheck.setAttribute("id", String("circle" + i));
    var innertaskone = document.querySelector(".task_one" + i);
    innertaskone.appendChild(createcheck);
    var createtext = document.createElement("p");
    createtext.classList.add("tasktext" + i);
    createtext.textContent = userInput;
    var innertasktwo = document.querySelector(".task_two" + i);
    innertasktwo.appendChild(createtext);
    var createtrash = document.createElement("i");
    createtrash.classList.add("fa-regular");
    createtrash.classList.add("fa-trash-can");
    createtrash.classList.add("fa-2xl");
    createtrash.setAttribute("id", String("trash"));
    createtrash.addEventListener("click", deleteTask);
    var innertaskthree = document.querySelector(".task_three" + i);
    innertaskthree.appendChild(createtrash);
    createcheck.addEventListener("click", checktask);
    function checktask() {
        if (createcheck.getAttribute("class") == "fa-regular fa-circle-check fa-2xl") {
            createcheck.setAttribute("class", "fa-regular fa-circle fa-2xl");
        }
        else {
            createcheck.setAttribute("class", "fa-regular fa-circle-check fa-2xl");
        }
    }
    createtrash.addEventListener("click", deleteTask);
    createtrash.addEventListener("click", count);
    function deleteTask() {
        creatediv.parentElement.removeChild(creatediv);
    }
}
// count
let countnumber = document.getElementById("count");
let newnumber = 0;
document.querySelector("#addnewtask").addEventListener("click", add);
function add() {
    newnumber += 1;
    countnumber.innerHTML = newnumber + " in total";
}
function count() {
    newnumber -= 1;
    countnumber.innerHTML = newnumber + " in total";
}
// clear Input
function clearInput() {
    document.querySelector("input").value = "";
}
//# sourceMappingURL=script.js.map