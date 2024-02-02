const API_KEY = "5749088a39871d57647211e31708430b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const fells = document.querySelector("#weather span:nth-child(3)");
      const weather = document.querySelector("#weather span:nth-child(4)");

      const all = [city, temp, fells, weather];
      all.forEach((element) => {
        element.style.margin = "5px";
      });
      city.innerText = `현재 위치 ${data.name}`;
      temp.innerText = `현재 날씨 ${data.weather[0].main}`;
      fells.innerText = `체감 온도 ${data.main.feels_like}`;
      weather.innerText = `현재 온도 ${data.main.temp}`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const weatherIcon = document.getElementById("weatherIcon");

const weather = document.getElementById("weather");

weatherIcon.addEventListener("click", () => {
  if (weather.style.display === "flex") {
    weather.style.display = "none";
  } else {
    weather.style.display = "flex";
  }
});
