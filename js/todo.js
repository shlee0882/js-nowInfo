const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDoList';

let toDosArray = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDosArray.filter(function(toDo){
        console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDosArray = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDosArray));
}

function paintToDo(text){
    console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDosArray.length + 1;
    delBtn.innerText = "❌";
    delBtn.className="toDo__button";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    li.className = "li_margin";
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDosArray.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos);
        console.log(parseToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();