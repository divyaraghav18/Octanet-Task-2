// Select elements
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add new task
addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create a new task item
  const li = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;

  // Mark task as completed
  taskSpan.addEventListener('click', function() {
    taskSpan.classList.toggle('completed');
  });

  // Create Edit button
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', function() {
    const newTaskText = prompt("Edit task:", taskSpan.innerText);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      taskSpan.innerText = newTaskText.trim();
    }
  });

  // Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', function() {
    li.remove();
  });

  // Append buttons and task to li
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add li to task list
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = "";
});
