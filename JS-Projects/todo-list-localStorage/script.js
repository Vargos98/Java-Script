document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");


  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // looping through the array

  tasks.forEach(task => {

    renderTask(task);
    
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false
    }
    tasks.push(newTask)
    saveTasks();
    todoInput.value = "";
    console.log(tasks)//clearing the input value after the task has been submitted.
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTask(task) {
    console.log(task.text);
    const li = document.createElement('li');
    li.setAttribute('data-id',task.id);
    li.innerHTML =`
    <span>${task.text}</span>
    <button>Delete</button>
    `
    todoList.appendChild(li);
  }
})