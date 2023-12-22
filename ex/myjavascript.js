//Den 01
var btnOn = document.getElementById("btnOnId_01");
var btnOff = document.getElementById("btnOffId_01");
btnOn.onclick = function(){
 document.getElementById("denId_01").src =
"lightbulb_on.png"
}
btnOff.onclick = function(){
 document.getElementById("denId_01").src =
"lightbulb_off.png"
}
//Den 02
var btnOn = document.getElementById("btnOnId_02");
var btnOff = document.getElementById("btnOffId_02");
btnOn.onclick = function(){
 document.getElementById("denId_02").src =
"lightbulb_on.png"
}
btnOff.onclick = function(){
 document.getElementById("denId_02").src =
"lightbulb_off.png"
}
//Den 03
var btnOn = document.getElementById("btnOnId_03");
var btnOff = document.getElementById("btnOffId_03");
btnOn.onclick = function(){
 document.getElementById("denId_03").src =
"lightbulb_on.png"
}
btnOff.onclick = function(){
 document.getElementById("denId_03").src =
"lightbulb_off.png"
}


//SliderNgang
var sliderNgang = document.getElementById("sliderNgangId");
var bulb01 = document.getElementById("bulb01");
sliderNgang.oninput = function(){
 document.getElementById("sliderNgangValue").innerHTML =
sliderNgang.value;
 bulb01.style.opacity = sliderNgang.value/10;
};



//Slider Tron 01-----------------------------------

function initial_sliderTron_01(data){
  $("#sliderTronId_01").roundSlider({
    sliderType: "min-range",
    width: 22,
    radius: 100,
    readOnly: false,
    value: data,
    circleShape: "half-top",
    lineCap: "round",
    editableTooltip: false,
    max: 100,
    svgMode: true,
    rangeColor: "red",
    // change: function (args) {
    //   var obj = $("#sliderTronId_01").data("roundSlider");
    //   $('#sliderTronId_02').roundSlider('setValue', obj.getValue());
    //   document.getElementById("nd").innerHTML = obj.getValue();
    // }
  });
};

initial_sliderTron_01(50); //Start first time


var sliderTron_01 = document.getElementById("sliderTronId_01");

//Change: function - METHOD 2------------
// sliderTron_01.addEventListener("mousemove", function(){
//   var obj = $("#sliderTronId_01").data("roundSlider");
//   $('#sliderTronId_02').roundSlider('setValue', obj.getValue());
// });

//Slider Tron 02-----------------------------------


function initial_sliderTron_02(data){
  $("#sliderTronId_02").roundSlider({
    sliderType: "min-range",
    width: 22,
    radius: 100,
    readOnly: false,
    value: data,
    circleShape: "half-top",
    lineCap: "round",
    editableTooltip: false,
    max: 100,
    svgMode: true,
    rangeColor: "#2cc4d3"
  });
};

initial_sliderTron_02(30); //Start first time


// var sliderTron_02 = document.getElementById("sliderTronId_02");
// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=52.229676&";
let lon = "lon=21.012229&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
.then((response) => response.json())
.then((data) => {
// Weather main data
let main = data.current.weather[0].main;
let description = data.current.weather[0].description;
let temp = Math.round(data.current.temp);
let pressure = data.current.pressure;
let humidity = data.current.humidity;
let name = "Warsaw";

document.getElementById("wrapper-description").innerHTML = description;
document.getElementById("wrapper-temp").innerHTML = temp + "°C";
document.getElementById("wrapper-pressure").innerHTML = pressure;
document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
document.getElementById("wrapper-name").innerHTML = name;

// Weather hourly data
let hourNow = data.hourly[0].temp;
let hour1 = data.hourly[1].temp;
let hour2 = data.hourly[2].temp;
let hour3 = data.hourly[3].temp;
let hour4 = data.hourly[4].temp;
let hour5 = data.hourly[5].temp;

document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

// Time
let timeNow = new Date().getHours();
let time1 = timeNow + 1;
let time2 = time1 + 1;
let time3 = time2 + 1;
let time4 = time3 + 1;
let time5 = time4 + 1;

document.getElementById("wrapper-time1").innerHTML = time1;
document.getElementById("wrapper-time2").innerHTML = time2;
document.getElementById("wrapper-time3").innerHTML = time3;
document.getElementById("wrapper-time4").innerHTML = time4;
document.getElementById("wrapper-time5").innerHTML = time5;

// Weather daily data
let tomorrowTemp = Math.round(data.daily[0].temp.day);
let dATTemp = Math.round(data.daily[1].temp.day);
let tomorrowMain = data.daily[0].weather[0].main;
let dATTempMain = data.daily[1].weather[0].main;

document.getElementById("wrapper-forecast-temp-today").innerHTML =
temp + "°";
document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
tomorrowTemp + "°";
document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
dATTemp + "°";

// Icons
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".webp";

// Today
let iconCodeToday = data.current.weather[0].icon;
let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

// Tomorrow
let iconCodeTomorrow = data.daily[0].weather[0].icon;
let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
document.getElementById(
"wrapper-icon-tomorrow"
).src = iconFullyUrlTomorrow;

// Day after tomorrow
let iconCodeDAT = data.daily[1].weather[0].icon;
let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

// Icons hourly

// Hour now
let iconHourNow = data.hourly[0].weather[0].icon;
let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
document.getElementById(
"wrapper-icon-hour-now"
).src = iconFullyUrlHourNow;

// Hour1
let iconHour1 = data.hourly[1].weather[0].icon;
let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

// Hour2
let iconHour2 = data.hourly[2].weather[0].icon;
let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

// Hour3
let iconHour3 = data.hourly[3].weather[0].icon;
let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

// Hour4
let iconHour4 = data.hourly[4].weather[0].icon;
let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

// Hour5
let iconHour5 = data.hourly[5].weather[0].icon;
let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

// Backgrounds
switch (main) {
case "Snow":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
break;
case "Clouds":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
break;
case "Fog":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
break;
case "Rain":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
break;
case "Clear":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
break;
case "Thunderstorm":
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
break;
default:
document.getElementById("wrapper-bg").style.backgroundImage =
"url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
break;
}
});