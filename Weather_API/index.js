 let cityName = document.querySelector(".weather_city");
 cityName.textContent="Pune";
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperature = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTem = document.querySelector(".weather_max");

let w_feelsLike = document.querySelector(".weather_feelsLike");
let w_humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

let citySearch = document.querySelector(".weather_search");
// console.log(citySearch);

// to get the actual country name
const getCountryName = (code) => {
  return new Intl.DisplayNames([code], { type: "region" }).of(code);
};

 // to get the date and time
const getDateTime = (dt) => {
  const curDate = new Date(dt * 1000); // (dt * 1000) Convert seconds to milliseconds then new Date converts into date format
  console.log(curDate);
  // // const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
//   console.log(formatter);
  return formatter.format(curDate);
};

//initially we have to display any city data to screen after that user can search any city weather report 
let city = "pune";

 // search functionality
citySearch.addEventListener("submit", (e) => {
  e.preventDefault(); //it prevent form to bydefault submit bcoz we have to display city name in search bar
                      //
  let cityName = document.querySelector(".city_name");
//   console.log(cityName.value);
  city = cityName.value; //get input city name by the reference of search_bar class

  getWeatherData(); //it search input city weather 

   cityName.value = ""; //after seaching clears search bar 
});

 const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4b1545cd518d9e7bf5f1b8ea64fea00e`;
  try {
     const res = await fetch(weatherUrl); //it returns ans in string
     const data = await res.json();  //converts string into object so we get values from object
     console.log(data);

     //use Object destructing to get the required attributes from API and assign into variable 
     const { main, name, weather, wind, sys, dt } = data;

       cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`; //func to convert country code to Country Name using API
       dateTime.innerHTML = getDateTime(dt); //how you convert seconds into time---imp

        w_forecast.innerHTML = weather[0].main;
        w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;

       w_temperature.innerHTML = `${main.temp}&#176`; //code for degree symbol(&#176)
       w_minTem.innerHTML = `Min: ${main.temp_min.toFixed()}&#176`; 
       w_maxTem.innerHTML = `Max: ${main.temp_max.toFixed()}&#176`;

      w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
      w_humidity.innerHTML = `${main.humidity}%`;
      w_wind.innerHTML = `${wind.speed} m/s`;
      w_pressure.innerHTML = `${main.pressure} hPa`;
   } catch (error) {
    console.log(error);
  }
 };

document.body.addEventListener("load", getWeatherData());