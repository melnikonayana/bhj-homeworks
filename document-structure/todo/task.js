const input = document.querySelector('#task__input');
const taskList = document.querySelector('#tasks__list');
const form = document.querySelector('#tasks__form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value === '') return;
    createDeleteElements(input.value);
    input.value = '';
})

function createDeleteElements(value) {
    const task = document.createElement('div');
    task.className = 'task';

    const title = document.createElement('div');
    title.className = 'task__title';
    title.textContent = value;
    task.appendChild(title);

    const btn = document.createElement('a');
    btn.className = 'task__remove';
    btn.textContent = '×';
    task.appendChild(btn);
    taskList.appendChild(task);

    btn.addEventListener('click', (e) => {
        taskList.removeChild(task);
    })
}
