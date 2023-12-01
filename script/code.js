let form = document.getElementById('form');
let input1 = document.getElementById('input1');
let taskList =[]
let taskBox = document.querySelector('#tasks')

let button = document.querySelector('[data-add]')
button.addEventListener('click', addTask)

function addTask(e) {
    // e.preventDefault();
    //     if(input1.value == '')
    // {
    //     return;
    // }
    let input1 = document.querySelector('#input1').value 
    taskList.push(input1)
     taskBox.innerHTML += `
        <input type="checkbox">
        <p>${input1}</p>
        <button type="button">Delete</button>
        `;

        
        task.querySelector('button').addEventListener('click', removeTask);
        
        tasks.appendChild(task);
        
        input1.value = '';
    }
    
    function toggleDone(e) {
        let task = e.target.parentNode;
        task.querySelector('p').classlist.toggle('done');

        task.querySelector('input[text="checkbox"]').addEventListener('change', toggleDone);
}

function removeTask(e) {
    let task = e.target.parentNode;
    taskBox.removeChild(task);
}

 function sortList() {
    let tasks = document.getElementById("input1");
    let task = task.getElementsByTagName("li");
    
    // Convert HTMLCollection to array
    let taskArray = Array.from(task);

    // Sort the array alphabetically
    taskArray.sort(function(a, b) {
      return a.textContent.localeCompare(b.textContent);
    });

    // Clear the list
    task.innerHTML = "";

    itemsArray.forEach(function(task) {
      list.appendChild(task);
    });
  }