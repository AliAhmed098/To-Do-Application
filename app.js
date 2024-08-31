document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;
        const li = document.createElement('li');
        li.innerHTML = `
            ${todoText}
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        li.querySelector('.edit-btn').addEventListener('click', () => editTodo(li));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTodo(li));
        todoList.appendChild(li);
        todoInput.value = '';
    }

    function editTodo(listItem) {
        const currentText = listItem.firstChild.textContent.trim();
        const newText = prompt('Edit TODO:', currentText);

        if (newText !== null && newText.trim() !== '') {
            listItem.firstChild.textContent = newText.trim();
        }
    }

    function deleteTodo(listItem) {
        todoList.removeChild(listItem);
    }
    
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    });
});
