const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const tastList = document.getElementById("taskList");

addBtn.addEventListener("click", function (){

    const taskText = taskInput.value;

    const li = document.createElement("li");

    li.textContent = tastText;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});