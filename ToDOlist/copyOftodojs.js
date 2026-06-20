// Get a reference to the input field and the list
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    // 1. Get the text from the input and remove extra spaces
    const taskText = taskInput.value.trim();

    // 2. Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return; // Stop the function if empty
    }

    // 3. Create the new list item element
    const listItem = document.createElement('li');
    
    // Set the content of the list item
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 4. Add Event Listeners for interaction

    // Toggle the 'completed' class when the list item is clicked
    listItem.addEventListener('click', function() {
        // .toggle() adds the class if it's not present, and removes it if it is
        listItem.classList.toggle('completed');
    });

    // Find the delete button within the new list item
    const deleteButton = listItem.querySelector('.delete-btn');
    
    // Remove the list item when the delete button is clicked
    deleteButton.addEventListener('click', function(event) {
        // event.stopPropagation() prevents the click from triggering the parent listItem's click event (toggling 'completed')
        event.stopPropagation(); 
        taskList.removeChild(listItem);
    });

    // 5. Append the new item to the main list
    taskList.appendChild(listItem);

    // 6. Clear the input field after adding the task
    taskInput.value = '';
}