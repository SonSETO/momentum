let linkCount = 0;
const maxLinks = 4;

const madelink = [
  { url: "https://chat.openai.com/", text: "Chat with OpenAI" },
  { url: "https://github.com/", text: "GitHub" },
  { url: "https://www.netflix.com/", text: "Netflix" },
  { url: "https://www.hometax.go.kr/", text: "HomeTax" },
];

document.getElementById("addLink").addEventListener("click", function () {
  if (linkCount < maxLinks) {
    let newLink = document.createElement("a");
    newLink.href = madelink[linkCount]?.url || "#";
    newLink.className = "sidebar-link";
    newLink.innerText = madelink[linkCount]?.text || `Link ${linkCount + 1}`;

    document.querySelector(".fav-menubar").appendChild(newLink);

    linkCount++;
  } else {
    alert("더 이상 추가할 수 없습니다.");
  }
});
