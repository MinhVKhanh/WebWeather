/* --------------- Weather Web App  --------------------- */
let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

//Make sure you have your own key.
let key = "2f745fa85d563da5adb87b6cd4b81caf";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        show.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1 class="maintemp">${data.main.temp} &#176;</h1>
        <div class="temp_container">
         <div>
            <h3 class="title">Thấp nhất</h3>
            <h3 class="temp">${data.main.temp_min}&#176;</h3>
            <h3 class="title">Độ ẩm</h3>
            <h3 class="temp">${data.main.humidity}&#176;</h3>
         </div>
         <div>
            <h3 class="title">Cao nhất</h3>
            <h3 class="temp">${data.main.temp_max}&#176;</h3>            
            <h3 class="title">Áp suất</h3>
            <h3 class="temp">${data.main.pressure}&#176;</h3>
         </div>   
        </div>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};
search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

$(document).ready(function(){
  function getData(){
    var url ="https://api.thingspeak.com/channels/2370169/fields/1.json?results=2";
    $.getJSON(url, function(data){
      var field1Value= [];
      var field2Value= [];
      var timestamp= [];

      $.each(data.feeds, function(index, feed){
        field1Value.push(feed.field1);
        field2Value.push(feed.field2);
        timestamp.push(feed.create_at);
      });

      var ctx= document.getElementById('mychart').getContext('2d');
      var chart = new Chart(ctx,{
        type:'bar',
        data:{
          label:timestamp,
          datasets:[{
            label: 'Temperature',
            data:field1Value,
            borderColor: '',
            backgroudColor: '#84bd00',
            borderWidth:1
          }]
        },
        option:{
          scales:{
            yAxes:[{
              thick:{
                beginAtZero: true
              }
            }]
          }
        }
      });

    });
  }
  getData();

});