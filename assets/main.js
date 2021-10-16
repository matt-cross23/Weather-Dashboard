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
var dayForecast1 = document.getElementById("day1");
var dayForecast2 = document.getElementById("day2");
var dayForecast3 = document.getElementById("day3");
var dayForecast4 = document.getElementById("day4");
var dayForecast5 = document.getElementById("day5");

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
      humidity.textContent = "humidity: " + data.main.humidity + "%";
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
    if (savedCities > 5) {
      cityList.textContent = savedCities[i];
    }
  }
}
displayCity();

function getApiForecast1() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      dayForecast1.textContent = data.list[5].dt_txt;
      var day1Temp = document.createElement("p");
      var day1Humidity = document.createElement("p");
      var day1Wind = document.createElement("p");
      var urlImg = document.createElement("img");
      urlImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[5].weather[0].icon +
          "@2x.png"
      );
      day1Temp.textContent = "temp: " + data.list[5].main.temp;
      day1Wind.textContent = " Wind: " + data.list[5].wind.speed + " MPH";
      day1Humidity.textContent =
        "Humidity: " + data.list[6].main.humidity + "%";

      dayForecast1.appendChild(urlImg);
      dayForecast1.appendChild(day1Temp);
      dayForecast1.appendChild(day1Humidity);
      dayForecast1.appendChild(day1Wind);
    });
}

searchBtn.addEventListener("click", getApiForecast1);

function getApiForecast2() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      dayForecast2.textContent = data.list[13].dt_txt;
      var day1Temp = document.createElement("p");
      var day1Humidity = document.createElement("p");
      var day1Wind = document.createElement("p");
      var urlImg = document.createElement("img");
      urlImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[13].weather[0].icon +
          "@2x.png"
      );
      day1Temp.textContent = "temp: " + data.list[13].main.temp;
      day1Wind.textContent = " Wind: " + data.list[13].wind.speed + " MPH";
      day1Humidity.textContent =
        "Humidity: " + data.list[13].main.humidity + "%";

      dayForecast2.appendChild(urlImg);
      dayForecast2.appendChild(day1Temp);
      dayForecast2.appendChild(day1Humidity);
      dayForecast2.appendChild(day1Wind);
    });
}

searchBtn.addEventListener("click", getApiForecast2);

function getApiForecast3() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      dayForecast3.textContent = data.list[21].dt_txt;
      var day1Temp = document.createElement("p");
      var day1Humidity = document.createElement("p");
      var day1Wind = document.createElement("p");
      var urlImg = document.createElement("img");
      urlImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[21].weather[0].icon +
          "@2x.png"
      );
      day1Temp.textContent = "temp: " + data.list[21].main.temp;
      day1Wind.textContent = " Wind: " + data.list[21].wind.speed + " MPH";
      day1Humidity.textContent =
        "Humidity: " + data.list[21].main.humidity + "%";

      dayForecast3.appendChild(urlImg);
      dayForecast3.appendChild(day1Temp);
      dayForecast3.appendChild(day1Humidity);
      dayForecast3.appendChild(day1Wind);
    });
}

searchBtn.addEventListener("click", getApiForecast3);

function getApiForecast4() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      dayForecast4.textContent = data.list[29].dt_txt;
      var day1Temp = document.createElement("p");
      var day1Humidity = document.createElement("p");
      var day1Wind = document.createElement("p");
      var urlImg = document.createElement("img");
      urlImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[29].weather[0].icon +
          "@2x.png"
      );
      day1Temp.textContent = "temp: " + data.list[29].main.temp;
      day1Wind.textContent = " Wind: " + data.list[29].wind.speed + " MPH";
      day1Humidity.textContent =
        "Humidity: " + data.list[29].main.humidity + "%";

      dayForecast4.appendChild(urlImg);
      dayForecast4.appendChild(day1Temp);
      dayForecast4.appendChild(day1Humidity);
      dayForecast4.appendChild(day1Wind);
    });
}

searchBtn.addEventListener("click", getApiForecast4);

function getApiForecast5() {
  var searchCity = searchBar.value;
  var requestUrl2 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    searchCity +
    "&units=imperial&appid=ba788355db8949934833ccadef931046";

  fetch(requestUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list[0].weather[0]);
      dayForecast5.textContent = data.list[37].dt_txt;
      
      var day1Temp = document.createElement("p");
      var day1Humidity = document.createElement("p");
      var day1Wind = document.createElement("p");
      var urlImg = document.createElement("img");
      urlImg.setAttribute(
        "src",
        "http://openweathermap.org/img/wn/" +
          data.list[37].weather[0].icon +
          "@2x.png"
      );
      day1Temp.textContent = "temp: " + data.list[37].main.temp;
      day1Wind.textContent = " Wind: " + data.list[37].wind.speed + " MPH";
      day1Humidity.textContent =
        "Humidity: " + data.list[37].main.humidity + "%";

      dayForecast5.appendChild(urlImg);
      dayForecast5.appendChild(day1Temp);
      dayForecast5.appendChild(day1Humidity);
      dayForecast5.appendChild(day1Wind);
    });
}

searchBtn.addEventListener("click", getApiForecast5);

function getUV(){
     getApi();

    var requestUrl2 =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      searchCity +
      "&units=imperial&appid=ba788355db8949934833ccadef931046";
  
    fetch(requestUrl2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    }