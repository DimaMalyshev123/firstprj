function enterKey(e) {
    if (e.keyCode == 13) {
        addToDo();
    }
}

function addToDo() {
    const toDo = document.getElementById('toDos').value;

    if (!toDo.trim()) return alert('Nothing entered');

    document.getElementById('toDos').value = "";

    const element = document.createElement('li');
    const text = document.createTextNode(toDo);
    const button = document.createElement('i');
    const allCompleted = document.createElement('input');

    element.addEventListener("click", toggleText);
    button.addEventListener('click', removeRecord);

    element.appendChild(text);
    element.classList.add('active', 'taskBlock');
    
    button.classList.add('far','fa-times-circle','deleteButton');
    
    element.appendChild(button);
    document.getElementById('listToDo').appendChild(element);

    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
    document.getElementById('countItem').classList.add('taskBlock');
    
    if(!document.getElementById('allCompleted')) {
        allCompleted.setAttribute("type", "submit");
        allCompleted.value = "All completed";
        allCompleted.id = "allCompleted";
        allCompleted.addEventListener('click', allComplete);
        allCompleted.classList.add('button');
        document.getElementById('container').appendChild(allCompleted);
    }
    
}

function removeRecord(event) {
    document.getElementById('listToDo').removeChild(event.path[1]);
    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
}

function toggleText(event) {
    console.log(event);
    event.target.classList.remove('taskBlock');
    if (event.target.className == 'active') {
        event.target.classList.remove('active');
        event.target.classList.add('completed','taskBlock');

        if(!document.getElementById('deleteComplete')) {
            const deleteCompleteBtn = document.createElement('input');

            deleteCompleteBtn.setAttribute("type", "submit");
            deleteCompleteBtn.value = "Delete completed";
            deleteCompleteBtn.id = "deleteComplete";
            deleteCompleteBtn.addEventListener('click', deleteCompleted);
            deleteCompleteBtn.classList.add('button');
            document.getElementById('container').appendChild(deleteCompleteBtn);
        }

        document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
    }
    else {
        event.target.classList.remove('completed');
        event.target.classList.add('active','taskBlock');
        document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
    }
}

function deleteCompleted() {
    const elements = document.getElementsByClassName("completed");
    while (elements.length > 0) elements[0].remove();
    document.getElementById('deleteComplete').remove();
    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
}

function allComplete() {
    const todos = document.getElementsByTagName('li');
    for (let i = 0; i < todos.length; i++) {
        todos[i].classList.remove('active');
        todos[i].classList.add('completed');
    }
    if(!document.getElementById('deleteComplete')) {
        const deleteCompleteBtn = document.createElement('input');

        deleteCompleteBtn.setAttribute("type", "submit");
        deleteCompleteBtn.value = "Delete completed";
        deleteCompleteBtn.id = "deleteComplete";
        deleteCompleteBtn.addEventListener('click', deleteCompleted);
        deleteCompleteBtn.classList.add('button');
        document.getElementById('container').appendChild(deleteCompleteBtn);
    }

    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
}