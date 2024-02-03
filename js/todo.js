const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const sidebar = document.querySelector(".sidebar");
const TODOS_KEY = "todos";
const SIDEBAR_KEY = "sidebarActive";

let toDos = [];
let isSidebarActive = localStorage.getItem(SIDEBAR_KEY) === "true";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveSidebarState() {
  localStorage.setItem(SIDEBAR_KEY, isSidebarActive);
}

function deleteToDo(event) {
  const lilist = event.target.closest("li");
  lilist.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(lilist.id));
  saveToDos();
  hideSidebarStyle();
}

function paintToDo(newTodo) {
  const lilist = document.createElement("li");
  lilist.id = newTodo.id;
  const lispan = document.createElement("span");
  lispan.innerText = newTodo.text;
  const libutton = document.createElement("button");
  libutton.innerHTML = '<i class="fa-fw fa-solid fa-trash-can"></i>';

  lispan.style.marginRight = "15px";
  lilist.style.marginTop = "20px";
  lilist.style.textAlign = "center";
  lilist.style.fontSize = "15px";

  lilist.style.color = "rgba(255, 255, 255, 0.8)";
  lilist.style.textDecoration = "none";
  lilist.style.background =
    "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))";
  lilist.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
  lilist.style.borderRadius = "5px";

  libutton.addEventListener("click", deleteToDo);

  lilist.appendChild(lispan);
  lilist.appendChild(libutton);
  toDoList.appendChild(lilist);
  showSidebarStyle();
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
    showSidebarStyle();
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
  isSidebarActive = true;
  sidebar.classList.add("active");
  saveSidebarState();
}

toDoForm.addEventListener("submit", showSidebarStyle);

function hideSidebarStyle() {
  const lilistItems = document.querySelectorAll("#todo-list li");

  if (lilistItems.length === 0) {
    isSidebarActive = false;
    sidebar.classList.remove("active");
    saveSidebarState();
  }
}

sidebar.addEventListener("click", hideSidebarStyle);

document.addEventListener("DOMContentLoaded", function () {
  if (isSidebarActive) {
    sidebar.classList.add("active");
  }
});
