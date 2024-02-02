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
  newLink.href = newmadeLink.url || "#";
  newLink.className = "sidebar-link";
  newLink.innerText = newmadeLink.text || `Link`;

  const abutton = document.createElement("button");
  abutton.innerText = "❌";
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

  const abutton = document.createElement("button");
  abutton.innerText = "❌";
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

    const abutton = document.createElement("button");
    abutton.innerText = "❌";
    abutton.addEventListener("click", deleteLink);

    newLink.appendChild(abutton);
    sidebarContainer.appendChild(newLink);
  });
}
