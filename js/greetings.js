const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings();
}

function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Welcome ${username}`;
  greeting.style.animation =
    "focus-in-contract-bck 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";

  greeting.style.fontSize = "45px";
  greeting.style.textAlign = "center";
  greeting.style.lineHeight = "2";
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveDUsername = localStorage.getItem(USERNAME_KEY);

if (saveDUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
}
