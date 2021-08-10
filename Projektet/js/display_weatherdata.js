import fetchWeatherdata from "./fetch_weatherdata.js";

export default async function displayWeatherdata() {
  const data = await fetchWeatherdata();
  addWeatherData(data);
}

function addWeatherData(data) {
  let table = document.querySelector("#weather-today");
  console.log(data);
  data.timeSeries.forEach((forecast) => {
    let windDirection = "";
    let temperature = "";
    let windStrength = "";
    let weatherStatus = "";
    let datetime = new Date(forecast.validTime);
    let datetimeHours = datetime.getHours();
    let date = datetime.getDate();
    let acceptableUTCHours = [4, 10, 16];
    let td = document.createElement("td");
    if (acceptableUTCHours.includes(datetimeHours)) {
      console.log(datetime);
      console.log(datetimeHours);
      forecast.parameters.map((p) => {
        let tr = document.createElement("tr");
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
          weatherStatus = p.values[0].toString();
        }
        td.innerHTML = addForecast(
          date,
          datetimeHours,
          windDirection,
          temperature,
          windStrength,
          weatherStatus
        );
        tr.appendChild(td);
      });
    }
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
  var html = "<td>" + windDirection + "</td>";
  // <td>` +
  // windStrength +
  // `</td>
  // <td>` +
  // temperature +
  // `</td>
  // <td>` +
  // interpretSymbol(weatherStatus) +
  // `</td>`;

  // date +
  // " " +
  // (datetime + 2).toString() +
  // " " +
  // temperature +
  // "C " +
  // windStrength +
  // "m/s " +
  // windDirection +
  // "d  " +

  return html;
}
function interpretSymbol(number) {
  switch (number) {
    case 1:
      return "Klart";
    case 2:
      return "Nästan klart";
    case 3:
      return "Lätt molnighet";
    case 4:
      return "Halvklart";
    case 5:
      return "Molnigt";
    case 6:
      return "Mycket moln";
    case 7:
      return "Mulet";
    case 8:
      return "Dimma";
    case 9:
      return "Lätt regnskur";
    case 10:
      return "Regnskur";
    case 11:
      return "Kraftig regnskur";
    case 12:
      return "Åskskur";
    case 13:
      return "Lätt by av regn och snö";
    case 14:
      return "By av regn och snö";
    case 15:
      return "Kraftig by av regn och snö";
    case 16:
      return "Lätt snöby";
    case 17:
      return "Snöby";
    case 18:
      return "Kraftig snöby";
    case 19:
      return "Lätt regn";
    case 20:
      return "Regn";
    case 21:
      return "Kraftigt regn";
    case 22:
      return "Lätt snöblandat regn";
    case 23:
      return "Snöblandat regn";
    case 24:
      return "Kraftigt snöblandat regn";
    case 25:
      return "Lätt snöfall";
    case 26:
      return "Snöfall";
    case 27:
      return "Ymnigt snöfall";
    default:
      break;
  }
}
