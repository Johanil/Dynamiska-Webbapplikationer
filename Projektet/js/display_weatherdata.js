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
    let datetimeHours = datetime.getHours();
    let date = datetime.getDate();
    let acceptableUTCHours = [4, 10, 16];
    console.log(Date.UTC);
    console.log(forecast.validTime.toString() + " " + datetime.getHours());
    console.log(datetimeHours);
    forecast.parameters.map((p) => {
      if (acceptableUTCHours.includes(datetimeHours)) {
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
          date,
          datetimeHours,
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
  date,
  datetime,
  windDirection,
  temperature,
  windStrength,
  weatherStatus
) {
  return (
    date +
    " " +
    (datetime + 2).toString() +
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
