let form = document.getElementById('form');
let input1 = document.getElementById('task')
let tasks = document.getElementById('tasks');

let button = document.querySelector('[data-add]').addEventListener('submit', addTask);

function addTask(e) {
    e.preventDefault();
        if(input1.value == '')
    {
        return;
    }

let task = document.createElement('li');
task.innerHTML =
    `<input type="checkbox">
        <p>${input1.value}</p>
        <button type="button">Delete</button>`

task.querySelector('input[text="checkbox"]').addEventListener('change', doneButton);

tasks.querySelector('button').addEventListener('click', removeTask);

tasks.appendChild(task);
taskInput.value = '';
}

function toggleDone(e) {
    let task = e.target.parentNode;
    task.querySelector('p').classlist.toggle('done');
}

function removeTask(e) {
    let task = e.target.parentNode;
    tasks.removeChild(task)
}