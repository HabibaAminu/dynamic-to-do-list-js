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


    // Event listener for DOMContentLoaded to invoke addTask
    document.addEventListener("DOMContentLoaded", addTask);
  
});
