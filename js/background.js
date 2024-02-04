const images = ["moon.gif", "nature.jpg", "rain2.gif", "sea.jpg", "cyber.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
