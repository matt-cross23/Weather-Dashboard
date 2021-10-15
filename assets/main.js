// console.log("am I connected?");
// var check = $("root");
// console.log(check);
var dailyForecast = document.getElementById('dailyweather');
var searchBtn = document.getElementById('searchbtn');
function getApi(){
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=ba788355db8949934833ccadef931046";

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
for (var i = 0; i<data.length; i++){
    var listItem = document.createElement('li');
    listItem.textContent= data[i].html;
dailyForecast.appendChild(listItem);
}
});
};
searchBtn.addEventListener('click', getApi);