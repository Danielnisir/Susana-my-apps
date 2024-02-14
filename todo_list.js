// todo_list.js

document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && this.value.trim() !== '') {
            addTodoItem(this.value.trim());
            this.value = '';
        }
    });

    function addTodoItem(task) {
        const listItem = document.createElement('li');
        listItem.classList.add('todoItem');
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="deleteButton" onclick="deleteTodoItem(this)">Delete</button>
        `;
        todoList.appendChild(listItem);
    }

    window.deleteTodoItem = function (button) {
        const listItem = button.parentElement;
        todoList.removeChild(listItem);
    };
});