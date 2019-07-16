function alertGreetings(greeting: string): void {
    alert(greeting);
}

function enterKey(e: KeyboardEvent) : void {
    if (e.keyCode == 13) {
        addToDo();
    }
}

function addToDo() : void {
    const toDo : string = (<HTMLInputElement>document.getElementById('toDos')).value;

    if (!toDo.trim()) return alert('Nothing entered');

    (<HTMLInputElement>document.getElementById('toDos')).value = "";

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

function removeRecord(event ) :void {
    document.getElementById('listToDo').removeChild(event.path[1]);
    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
}

function toggleText(event : MouseEvent ) : void {
    (<HTMLTextAreaElement>(<HTMLTextAreaElement>event.target)).classList.remove('taskBlock');
    if ((<HTMLTextAreaElement>event.target).className == 'active') {
        (<HTMLTextAreaElement>event.target).classList.remove('active');
        (<HTMLTextAreaElement>event.target).classList.add('completed','taskBlock');

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
        (<HTMLTextAreaElement>event.target).classList.remove('completed');
        (<HTMLTextAreaElement>event.target).classList.add('active','taskBlock');
        document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
    }
}

function deleteCompleted() : void {
    const elements = document.getElementsByClassName("completed");
    while (elements.length > 0) elements[0].remove();
    document.getElementById('deleteComplete').remove();
    document.getElementById('countItem').textContent = "Active item:" + document.getElementsByClassName('active').length;
}

function allComplete() : void {
    const todos = document.getElementsByTagName('li');
    for (let i : number = 0; i < todos.length; i++) {
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