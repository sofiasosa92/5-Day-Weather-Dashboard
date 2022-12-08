var apiKey = "4900f1d128bd172382581da33056b932";

// Globally set variables for your input/search field, search button, temp/wind/humidity and cityname areas by
// bringing over the ids/classes from your html
const newName = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const tempDisplay = document.getElementById("tempDisplay");
const windDisplay = document.getElementById("windDisplay");
const humidityDisplay = document.getElementById("humidityDisplay");

const cityName = document.getElementById("cityName");

// create function that prevents reload of page when search button is clicked
// that will also hold the input of the search box
function citySearch(event) {
    event.preventDefault();
    // variable to hold the input received from the search box and useing .trim() at
    // the end of the value to eliminate whitespace
    let citySearched = newName.value.trim();
    //   calling function that gets the city info like lat and lon plus weather data
    // from api and pass in variable just created for search field value
    pullCityInfo(citySearched);
}
// add event listener to search button and pass in citySearch function
searchBtn.addEventListener("click", citySearch);
// create function to get city and weather from api on city name searched
// and pass in the variable created to hold search input
function pullCityInfo(citySearched) {
    // set variable to hold the api for current weather, found on the api site
    let currentWeatherApi =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        citySearched +
        "&units=imperial&appid=" +
        apiKey;
    // fetch api data
    fetch(currentWeatherApi)
        .then((response) => response.json())
        .then((data) => {
            // grab lat and lon
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            //   call getWeatherData function and add search, lat and lon params
            getWeatherData(citySearched, lat, lon);
            console.log(data);
        });
}

// main function to pull in more info and stick to page
function getWeatherData(citySearched, lat, lon) {
    // create variable for forecast api, concat lat and lon, exclude unneccessary params
    let forecastApi =
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=minutely,hourly,alerts&units=imperial&appid=" +
        apiKey;

    // fetching the api set in the forecastApi variable at the beginning of this function
    fetch(forecastApi).then((response) => {
        response.json().then(function (data) {
            // console.log is putting api info in the console for easier viewing
            console.log(data);

            //   setting variable with date and digging into api via data -> list[0] -> .dt
            const currentDate = new Date(data.list[0].dt * 1000).toLocaleDateString();

            //   prints current date and citySearched to page placing in the currentDate id declared in index.html
            document.getElementById("currentDate").innerHTML =
                citySearched + ": " + currentDate;
            // prints temp, wind and humidity to page
            tempDisplay.textContent = "Temp: " + data.list[0].main.temp + " F";
            windDisplay.textContent = "Wind: " + data.list[0].wind.speed + " mph";
            humidityDisplay.textContent =
                "Humidity: " + data.list[0].main.humidity + " %";
            //icons
            var img1 = document.getElementById("img1")
            img1.src = "https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png"

//displaying info
            var temp1 = document.getElementById("day1temp")
            temp1.textContent = "Temp: " + data.list[7].main.temp + " F";

            var wind1 = document.getElementById("day1wind")
            wind1.textContent = "Wind: " + data.list[7].wind.speed;

            var hum1 = document.getElementById("day1hum")
            hum1.textContent = "Hum: " + data.list[7].main.humidity;

//day 2
            var img2 = document.getElementById("img2")
            img2.src = "https://openweathermap.org/img/wn/" + data.list[14].weather[0].icon + ".png"

            var temp2 = document.getElementById("day2temp")
            temp2.textContent = "Temp: " + data.list[14].main.temp + " F";

            var wind2 = document.getElementById("day2wind")
            wind2.textContent = "Wind: " + data.list[14].wind.speed;

            var hum2 = document.getElementById("day2hum")
            hum2.textContent = "Hum: " + data.list[14].main.humidity;
//day 3
            var img3 = document.getElementById("img3")
            img3.src = "https://openweathermap.org/img/wn/" + data.list[21].weather[0].icon + ".png"

            var temp3 = document.getElementById("day3temp")
            temp3.textContent = "Temp: " + data.list[21].main.temp + " F";

            var wind3 = document.getElementById("day3wind")
            wind3.textContent = "Wind: " + data.list[21].wind.speed;

            var hum3 = document.getElementById("day3hum")
            hum3.textContent = "Hum: " + data.list[21].main.humidity;

//day 4 
            var img4 = document.getElementById("img4")
            img4.src = "https://openweathermap.org/img/wn/" + data.list[28].weather[0].icon + ".png"

            var temp4 = document.getElementById("day4temp")
            temp4.textContent = "Temp: " + data.list[28].main.temp + " F";

            var wind4 = document.getElementById("day4wind")
            wind4.textContent = "Wind: " + data.list[28].wind.speed;

            var hum4 = document.getElementById("day4hum")
            hum4.textContent = "Hum: " + data.list[28].main.humidity;

//day 5 

            var img5 = document.getElementById("img5")
            img5.src = "https://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"

            var temp5 = document.getElementById("day5temp")
            temp5.textContent = "Temp: " + data.list[35].main.temp + " F";

            var wind5 = document.getElementById("day5wind")
            wind5.textContent = "Wind: " + data.list[35].wind.speed;

            var hum5 = document.getElementById("day5hum")
            hum5.textContent = "Hum: " + data.list[35].main.humidity;

        });
    });
}

// TODO: add icon to weather like with tempDisplay.textContent by digging into the api data.

// TODO: create for loop to loop through the data to get your 5 day forecast, then append to page.

// function DefaultScreen() {
//   document.getElementById("cityInput").defaultValue = "Dallas";
//   GetInfo();
// }

// const weekday = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// function CheckDay(day) {
//   if (day + d.getDay() > 6) {
//     return day + d.getDay() - 7;
//   } else {
//     return day + d.getDay();
//   }
// }

// for (i = 0; i < 5; i++) {
//   document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
// }











//old functions

// var apiKey = "4900f1d128bd172382581da33056b932"


// function GetInfo(){
//     const newName = document.getElementById("cityInput");
//     const cityName = document.getElementById("cityName");
//     cityName.innerHTML = "--"+newName.value+"--"




// // function coordinates(userInput){

// // }
// fetch(apiUrl)
// .then(response => response.json())
// .then(data =>{
//     console.log(data);


//     for(i=0; i<5; i++){
//         document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -284.22).toFixed(1)+"°";
//     }
//     for(i=0; i<5; i++){
//         document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -286.26).toFixed(1)+"°";
//     }

//     //my icons wont load either
//     for(i=0; i<5; i++){
//         document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon+".png";
//     }

// })

// .catch(err => alert("Something Went Wrong"))
// }
// console.log(GetInfo);

// //
// function pullCity() {
//     var apiUrl = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + apiKey;
//     fetch(apiUrl)
//     .then(response => response.json())
//     .then(data =>{ 
//         var lat = data
//         console.log(apiUrl);
// }


// function DefaultScreen(){
//     document.getElementById("cityInput").defaultValue ="Dallas";
//     GetInfo();
// }

// const d =new Date();
// const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// function CheckDay(day){
//     if(day +d.getDay() > 6){
//         return day +d.getDay()-7;
//     }
//     else{
//         return day +d.getDay();
//     }
// }

// for(i=0; i<5; i++){
//     document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
// }


