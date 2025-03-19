const body = document.body;
body.style.backgroundColor = 'rgb(90, 14, 14)';
body.style.height = '1000px';

const h1 = document.createElement('h1');
h1.textContent = 'To Do List!';
h1.style.color = 'white';
h1.style.textAlign = 'center';
h1.style.paddingBottom = '20px';

const form = document.getElementById('toDo');
form.style.backgroundColor = 'rgb(126, 42, 42)';
form.style.height = '500px';
form.style.width = '400px';
form.style.paddingTop = '20px';
form.style.position = 'absolute';
form.style.top = '50%';
form.style.left= '50%';
form.style.transform = 'translate(-50%, -50%)';
form.style.padding = '30px';
form.appendChild(h1);
form.insertBefore(h1, form.firstChild);

const input = document.getElementById('tasks');
input.style.width = '300px';
input.style.borderRadius = '10px';
input.style.margin = '5px';
input.style.padding = '5px';
input.addEventListener('focus', () => {
    input.style.backgroundColor = 'rgb(239, 176, 176)';
});
input.addEventListener('blur', () => {
    input.style.backgroundColor = 'rgb(255, 248, 248)';
});

const addButton = document.getElementById('add-btn');
addButton.style.width = '70px';
addButton.style.height = '30px';
addButton.style.borderRadius = '10px';
addButton.style.backgroundColor = 'rgb(90, 14, 14)';
addButton.style.color = 'rgb(255, 255, 255)';
addButton.style.fontWeight = 'bold';
addButton.style.fontSize = '15px';
addButton.addEventListener('mousedown', () => {
    addButton.style.backgroundColor = 'rgb(230, 158, 168)';
});
addButton.addEventListener('mouseup', () => {
    addButton.style.backgroundColor = 'rgb(90, 14, 14)';
});

const taskList = document.getElementById('task-list');
taskList.style.listStyle = 'none'
addButton.addEventListener('click', () => {
    const tasks = input.value;
    if(tasks === '') return;
    const list = document.createElement('li');
    list.textContent = tasks;
    list.style.backgroundColor = 'rgb(168, 46, 46)';
    list.style.padding = '1px';
    list.style.margin = '0px';
    list.style.width = '350px';
    list.style.display = 'flex';
    list.style.justifyContent = 'space-between';
    list.style.border = '1px solid #ccc';
    list.style.borderRadius = '10px';
    list.addEventListener('mouseenter', ()=> {
        list.style.backgroundColor = 'rgb(248, 218, 222)';
    }); 
    list.addEventListener('mouseleave', ()=> {
        list.style.backgroundColor = 'rgb(168, 46, 46)';
    }); 
    
    const delButton = document.createElement('button');
    delButton.textContent = 'Delete';
    delButton.style.width = '70px';
    delButton.style.height = '30px';
    delButton.style.borderRadius = '10px';
    delButton.style.backgroundColor = 'rgb(242, 12, 12)';
    delButton.style.color = 'rgb(255, 255, 255)';
    delButton.style.fontWeight = 'bold';
    delButton.style.fontSize = '15px';
    delButton.addEventListener('click', () => {
        taskList.removeChild(list);
    });

    list.appendChild(delButton);
    taskList.appendChild(list);
    input.value = '';
});

