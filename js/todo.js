const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const sidebar = document.querySelector(".sidebar");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const lilist = event.target.closest("li");
  lilist.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(lilist.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const lilist = document.createElement("li");
  lilist.id = newTodo.id;
  const lispan = document.createElement("span");
  lispan.innerText = newTodo.text;
  const libutton = document.createElement("button");
  libutton.innerHTML = '<i class="fa-fw fa-solid fa-trash-can"></i>';

  libutton.addEventListener("click", deleteToDo);
  lispan.style.marginRight = "15px";
  lilist.style.marginTop = "20px";
  lilist.style.textAlign = "center";

  lilist.appendChild(lispan);
  lilist.appendChild(libutton);
  toDoList.appendChild(lilist);
}

const MAX_TODO_ITEMS = 20;

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  if (toDos.length < MAX_TODO_ITEMS) {
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  } else {
    alert(`최대 ${MAX_TODO_ITEMS}개까지만 리스트를 추가할 수 있습니다.`);
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function showSidebarStyle() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("active");
}
toDoForm.addEventListener("submit", showSidebarStyle);

function hideSidebarStyle() {
  const lilistItems = document.querySelectorAll("#todo-list li");

  if (lilistItems.length === 0) {
    sidebar.classList.remove("active");
  }
}
sidebar.addEventListener("click", hideSidebarStyle);
