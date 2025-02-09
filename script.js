// Event listener for the page load
document.addEventListener("DOMContentLoaded", function () {

  const addButton = document.getElementById("add-task-btn");
  console.log(addButton);

  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    createTaskElement(taskText);
    SaveTaskToStorage(taskText);
  }

    // Create a new li element
    function createTaskElement(taskText)  {
     const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    
     // Create a remove button
     const removeButton = document.createElement("button");
     removeButton.textContent = "Remove";
     removeButton.classList.add("remove-btn");
 
     // Add event listener to remove the task
     removeButton.onclick = function () {
       taskList.removeChild(taskItem);
     };
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
    }
    
    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to remove a task from Local Storage
  function removeTaskFromStorage(taskText) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      const updatedTasks = tasks.filter(function (task) {
          return task !== taskText;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Function to load tasks from Local Storage on page load
  function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.forEach(function (task) {
          createTaskElement(task);
      });
  }

    // Event listener for the "Add Task" button
    addButton.addEventListener("click", function () {
      addTask();
  });
    // Event listener for "Enter" key press in the input field
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });

    loadTasks();


    // Event listener for DOMContentLoaded to invoke addTask
    document.addEventListener("DOMContentLoaded", addTask);
  
});
