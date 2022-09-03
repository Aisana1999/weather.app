let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = `${day}, ${hour}:${minutes}`;
let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = date;

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let cityForm = document.querySelector("#searchCity");
cityForm.addEventListener("submit", showCity);

function showFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = "62°F";
  let currentTempF = document.querySelector("#currentTemp");
  currentTempF.innerHTML = fahrenheitTemp;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", showFahrenheit);

function showCelsius(event) {
  event.preventDefault();
  let celsiusTemp = "32°C";
  let currentTempC = document.querySelector("#currentTemp");
  currentTempC.innerHTML = celsiusTemp;
}
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", showCelsius);
