const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return; 
    }
    const listItem = document.createElement('li');
    
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    const deleteButton = listItem.querySelector('.delete-btn');

    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        taskList.removeChild(listItem);
    });
    taskList.appendChild(listItem);
    taskInput.value = '';
}