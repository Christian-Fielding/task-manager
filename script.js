const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const tastList = document.getElementById("taskList");

let tasks = [];

//create task element

function createTask(taskText) {

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        //remove from tasks array
        tasks = tasks.filter(function (task) {
            reutrn task !== taskText;
        });

        //update local storage
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

        //remove from page
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

//load saved tasks
const savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
    tasks = savedTasks;

    tasks.forEach(function (task) {
        createTask(task);
    });
}

//add task button
addBtn.addEventListener("click", function (){

    const taskText = taskInput.value.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    createTask(taskText);

    tasks.push(taskText);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    taskInput.value = "";
});