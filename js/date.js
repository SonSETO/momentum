const date = document.getElementById("date");

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const dayOfWeek = date.toLocaleString("default", { weekday: "long" });

  return `${year}년 ${month} ${day}일 ${dayOfWeek}`;
}

function displayDate() {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  date.textContent = formattedDate;
  date.style.fontSize = "25px";
}

displayDate();

setInterval(displayDate, 1000);
