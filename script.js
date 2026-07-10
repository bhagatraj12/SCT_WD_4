let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

const taskInput=document.getElementById("taskInput");

const taskDate=document.getElementById("taskDate");

if(taskInput.value===""){

alert("Please enter a task");

return;

}

tasks.push({

text:taskInput.value,

date:taskDate.value,

completed:false

});

saveTasks();

displayTasks();

taskInput.value="";

taskDate.value="";

}

function displayTasks(){

const list=document.getElementById("taskList");

list.innerHTML="";

tasks.forEach((task,index)=>{

const li=document.createElement("li");

if(task.completed)

li.classList.add("completed");

li.innerHTML=`

<div class="task-info">

<strong>${task.text}</strong>

<small>${task.date}</small>

</div>

<div class="task-buttons">

<button class="complete" onclick="completeTask(${index})">✔</button>

<button class="edit" onclick="editTask(${index})">Edit</button>

<button class="delete" onclick="deleteTask(${index})">Delete</button>

</div>

`;

list.appendChild(li);

});

}

function completeTask(index){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function editTask(index){

let newTask=prompt("Edit Task",tasks[index].text);

if(newTask!==null){

tasks[index].text=newTask;

saveTasks();

displayTasks();

}

}