const loves = ["lover1.jpg", "lover2.jpg"];
let loveIndexes = [0, 1];

function toggleLove() {
  const loverIcon = document.querySelector(".mylover");
  const loverImage = document.getElementById("loverImage");

  const randomIndex =
    loveIndexes[Math.floor(Math.random() * loveIndexes.length)];

  loverImage.src = `img/${loves[randomIndex]}`;

  loverIcon.classList.toggle("clicked");
}
