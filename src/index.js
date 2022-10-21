function showPosition(positon) {
  let latitude = positon.coords.latitude;
  let longitude = positon.coords.longitude;
  let apiKey = "c4e575404a843db58519839e2e8ffc17";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#button-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

//SWITCHING TEMP FROM C TO F

// function changeToF() {
//   let temperature = document.querySelector(".heading-temperature");
//   let tempInF = 17 * 1.8 + 32;
//   temperature.innerHTML = tempInF;
// }
// let tempfarenheit = document.querySelector(".fahrenheit");
// tempfarenheit.addEventListener("click", changeToF);

// function changeToC() {
//   let temperature = document.querySelector(".heading-temperature");
//   let tempInC = 17;
//   temperature.innerHTML = tempInC;
// }
// let tempCelsius = document.querySelector(".celsius");
// tempCelsius.addEventListener("click", changeToC);

let now = new Date();
console.log(now);
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
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let date = `${day}, ${hours}:${minutes}`;
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


