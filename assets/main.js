// console.log("am I connected?");
// var check = $("root");
// console.log(check);
var dailyForecast = document.getElementById("daily-weather");
var searchBtn = document.getElementById("searchbtn");
var temp = document.getElementById("temp");
var humidity = document.getElementById("humidity");
var wind = document.getElementById("wind");
var uv = document.getElementById("uv");
var cityList = document.getElementsByClassName("city");
var searchBar = document.getElementById("search-bar");
var savedCities = JSON.parse(localStorage.getItem("cities")) || [];
var dayForecast = document.getElementById("day1");

function getApi() {
  var searchCity = searchBar.value;
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      dailyForecast.textContent = data.name;
      temp.textContent = "temp: " + data.main.temp;
      humidity.textContent = "humidity: " + data.main.humidity;
      wind.textContent = "wind: " + data.wind.speed + "mph";
      uv.textContent = "UV: " + data.main.uv;
    });
  savedCities.push(searchCity);
  localStorage.setItem("cities", JSON.stringify(savedCities));
  displayCity();
}
searchBtn.addEventListener("click", getApi);
function displayCity() {
  for (var i = 0; i < savedCities.length; i++) {
    cityList[i].textContent = savedCities[i];
  }
}
displayCity();

function getApiForecast() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      for (var i = 1; i < data.list[0].weather[0].length; i++) {
        console.log(data.list[i].weather[i]);
          
      }
      

    });
}

searchBtn.addEventListener("click", getApiForecast);
