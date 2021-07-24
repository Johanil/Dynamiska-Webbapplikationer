import fetchWeatherdata from "./fetch_weatherdata.js";

export default async function displayWeatherdata() {
  const data = await fetchWeatherdata();
  addWeatherData(data);
}

function addWeatherData(data) {
  let weatherSection = document.getElementById("weather");

  data.timeSeries.forEach((forecast) => {
    let weatherArticle = document.createElement("ARTICLE");
    let windDirection = "";
    let temperature = "";
    let windStrength = "";
    let weatherStatus = "";
    let datetime = new Date(forecast.validTime);
    let acceptableHours = [6,12,18];
    console.log(forecast.validTime.toString()+" "+datetime.getHours())
    forecast.parameters.map((p) => {
        if (acceptableHours.includes(datetime.getUTCHours())) {
      if (p.name == "wd") {
        windDirection = p.values.toString();
      }
      if (p.name == "t") {
        temperature = p.values.toString();
      }
      if (p.name == "ws") {
        windStrength = p.values.toString();
      }
      if (p.name == "Wsymb2") {
        weatherStatus = p.values.toString();
      }
      weatherArticle.innerHTML = addForecast(
        new Date(forecast.validTime),
        windDirection,
        temperature,
        windStrength,
        weatherStatus
      );
    }
    });


    weatherSection.appendChild(weatherArticle);
  });
}

function addForecast(
  datetime,
  windDirection,
  temperature,
  windStrength,
  weatherStatus
) {
  return (
    datetime+", "+datetime.getHours() +
    " " +
    temperature +
    "C " +
    windStrength +
    "m/s " +
    windDirection +
    "d  " +
    weatherStatus
  );
}
