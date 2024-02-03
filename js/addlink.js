let localStorageKey = "madelink";

let madelinks = JSON.parse(localStorage.getItem(localStorageKey)) || [];

function saveLink() {
  localStorage.setItem(localStorageKey, JSON.stringify(madelinks));
}

function deleteLink(event) {
  event.preventDefault();
  const aLink = event.target.closest("a");
  const linkId = parseInt(aLink.id);
  aLink.remove();
  madelinks = madelinks.filter((link) => link.id !== linkId);
  console.log("Deleting link with id:", linkId);
  saveLink();
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function addLink() {
  const InputURL = document.getElementById("urlInput").value;
  const InputText = document.getElementById("textInput").value;

  const newmadeLink = { id: Date.now(), url: InputURL, text: InputText };
  madelinks.push(newmadeLink);

  let newLink = document.createElement("a");
  newLink.id = newmadeLink.id;
  newLink.href = newmadeLink.url || "#";
  newLink.className = "sidebar-link";
  newLink.innerText = newmadeLink.text || `Link`;

  const abutton = document.createElement("button");
  abutton.innerHTML = '<i class="fa-fw fa-solid fa-trash-can"></i>';
  abutton.style.fontSize = "15px";
  abutton.style.float = "right";
  abutton.style.color = "rgba(255, 255, 255, 0.8)";
  abutton.style.textDecoration = "none";
  abutton.style.background =
    "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))";
  abutton.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
  abutton.style.borderRadius = "5px";

  abutton.addEventListener("click", deleteLink);

  newLink.appendChild(abutton);

  newLink.addEventListener("click", function () {
    window.location.href = newLink.href;
  });

  document.querySelector(".fav-menubar").appendChild(newLink);
  saveLink();
  closeModal();
}

document.getElementById("addLink").addEventListener("click", function () {
  openModal();
});

madelinks.forEach((link) => {
  let newLink = document.createElement("a");
  newLink.href = link.url || "#";
  newLink.className = "sidebar-link";
  newLink.innerText = link.text || `Link`;
  newLink.id = link.id;

  const abutton = document.createElement("button");
  abutton.innerHTML = '<i class="fa-fw fa-solid fa-trash-can"></i>';
  abutton.style.fontSize = "15px";
  abutton.style.float = "right";
  abutton.style.color = "rgba(255, 255, 255, 0.8)";
  abutton.style.textDecoration = "none";
  abutton.style.background =
    "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))";
  abutton.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
  abutton.style.borderRadius = "5px";
  abutton.addEventListener("click", deleteLink);
  newLink.appendChild(abutton);
  document.querySelector(".fav-menubar").appendChild(newLink);
});

document.getElementById("myModal").addEventListener("click", function (event) {
  const target = event.target;

  if (target.tagName === "BUTTON" && target.id === "addLinkBtn") {
    addLink();
  } else if (target.classList.contains("close")) {
    closeModal();
  }
});

function refreshSidebar() {
  const sidebarContainer = document.querySelector(".fav-menubar");
  sidebarContainer.innerHTML = "";

  madelinks.forEach((link) => {
    let newLink = document.createElement("a");
    newLink.href = link.url || "#";
    newLink.className = "sidebar-link";
    newLink.innerText = link.text || `Link`;
    newLink.id = link.id;

    const abutton = document.createElement("button");
    abutton.innerHTML = '<i class="fa-fw fa-solid fa-trash-can"></i>';
    abutton.style.fontSize = "15px";
    abutton.style.float = "right";
    abutton.style.color = "rgba(255, 255, 255, 0.8)";
    abutton.style.textDecoration = "none";
    abutton.style.background =
      "linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))";
    abutton.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    abutton.style.borderRadius = "5px";

    abutton.addEventListener("click", deleteLink);

    newLink.appendChild(abutton);
    sidebarContainer.appendChild(newLink);
  });
}
