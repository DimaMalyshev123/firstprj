function toDoList()
{
    var toDo = document.getElementById('list').value;
    if(toDo.trim())
    {
        var element = document.createElement('li');
        element.addEventListener("click", textLine)
       // element.innerHTML = 
       // toDo += '<input type = "submit" value = "remove" onclick = "removeRecord(1)" >';
        var text = document.createTextNode(toDo); 
        element.appendChild(text); 
        var button = document.createElement('input');
        button.setAttribute("type", "submit");
        button.value = "remove";
        element.appendChild(button);
        document.getElementById('listDo').appendChild(element);
    }
    else
    {
        alert('Nothing entered');
    }
    document.getElementById('list').value = "";
}

function removeRecord()
{
    
}

function textLine(event) {
    console.log(event);
    if(!event.target.style.textDecoration)
    {
        event.target.style.textDecoration = "line-through";
    }
    else 
    {
        event.target.style.textDecoration = "";
    }
}