window.onload = () => document.getElementById("input").focus()
let addKey = document.querySelector("#add");
let inputKey = document.querySelector("#input");
let tasks = document.querySelector("#tasks");
loading();
// add task to the list 
addKey.onclick = function () {
    if (inputKey.value.trim() !== "") {
        let task = document.createElement("div");
        let taskText = document.createElement("span");
        let Texto = document.createTextNode(inputKey.value);
        taskText.appendChild(Texto);
        task.appendChild(taskText);
        // The delete button
        let del = document.createElement("button");
        del.textContent = "Remove";
        del.onclick = () => {
            tasks.removeChild(task);
            addToLocal();
        }
        // Adding the task
        task.appendChild(del);
        tasks.appendChild(task);
        // Done adding
        inputKey.value = ""
        addToLocal();
    }
}
// Storing the tasks to local
function addToLocal() {
    let taskList = [];
    tasks.childNodes.forEach((task) => {
        if (task.nodeName.toLowerCase() === "div") {
            taskList.push(task.firstChild.textContent);
        }
        //addind the tasks to local
    });
    localStorage.setItem("tasks", JSON.stringify(taskList));

}
function loading() {
    let localTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    //Creating the tasks again
    localTasks.forEach((taskText) => {
        let task = document.createElement("div");
        let taskTexto = document.createElement("span");
        taskTexto.appendChild(document.createTextNode(taskText));
        task.appendChild(taskTexto);
        // The delete button
        let del = document.createElement("button");
        del.textContent = "Remove";
        del.onclick = () => {
            tasks.removeChild(task);
            addToLocal();
        };
        task.appendChild(del);
        tasks.appendChild(task);
    });
}

