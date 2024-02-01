const quotes = [
  {
    quote: "Life is art, and you are the artist painting your own masterpiece.",
    author: "Dustin Riechmann",
  },
  {
    quote:
      "Happiness is a choice of the heart. Our lives change depending on what we choose to focus on.",
    author: "Anaïs Nin",
  },
  {
    quote:
      "The world we see is not the world itself, but the world as perceived by our minds.",
    author: "Henry David Thoreau",
  },
  {
    quote: "Not for Somewhere, someone, somehow. For complete oneself.",
    author: "SETO",
  },
  {
    quote: "Mind your business.",
    author: "YooHwa",
  },
  {
    quote:
      "If you don't live according to your thoughts, you end up thinking according to how you live.",
    author: "Gaonz",
  },
  {
    quote:
      "I acknowledge the impossibility of forgetting you. Observing the fleeting voids in my life being filled only by you...",
    author: "Backu",
  },
  {
    quote:
      "You used to like small fires and ashes. It's been a long time since you left me. I'm still trying to organize my mind that I couldn't stay here and burn.",
    author: "SETO",
  },
  {
    quote:
      "It hurt, but it was my heart. It passed, but it was my love. I sincerely hope you live beautifully throughout. Take care.",
    author: "SETO",
  },
  {
    quote:
      "Wherever you are, whatever you do, As long as you exist within that pale blue dot, I will always support and pray for you. I loved you, and I still do. Take care and be well.",
    author: "SETO",
  },
];

const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");

function change() {
  const changequtoe = quotes[Math.floor(Math.random() * quotes.length)];
  quoteText.innerText = changequtoe.quote;
  quoteAuthor.innerText = changequtoe.author;
}

change();

document.getElementById("quote").addEventListener("click", change);
