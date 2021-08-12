import fetchWeatherdata from "./fetch_weatherdata.js";

export default async function displayWeatherdata() {
  const data = await fetchWeatherdata();
  addWeatherData(data);
}
function addWeatherTable() {
  var html = `<h4>Idag</h4>
          <div>
            <table id="weather-today">
              <tr>
                <th>KL</th>
                <th>Temp</th>
                <th>Vind</th>
                <th>Himmel</th>
              </tr>
            </table>
          </div>
          <h4>Imorgon</h4>
          <div>
            <table id=weather-tomorrow>
              <tr>
                <th>KL</th>
                <th>Temp</th>
                <th>Vind</th>
                <th>Himmel</th>
              </tr>
            </table>
          </div>`;
  let weatherDiv = document.querySelector("#weather-div");
  weatherDiv.innerHTML = html;
  return weatherDiv;
}

function addWeatherData(data) {
  addWeatherTable();
  let table1 = document.querySelector("#weather-today");
  let table2 = document.querySelector("#weather-tomorrow");
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  let tomorrowDay = tomorrow.getUTCDate();
  let todayDay = today.getUTCDate();
  data.timeSeries.forEach((forecast) => {
    let windDirection = "";
    let temperature = "";
    let windStrength = "";
    let weatherStatus = "";
    let datetime = new Date(forecast.validTime);
    let datetimeHours = datetime.getHours();
    let date = datetime.getDate();
    let acceptableUTCHours = [4, 10, 16];
    if (
      acceptableUTCHours.includes(datetimeHours) &&
      (date == todayDay || date == tomorrowDay)
    ) {
      let tr = document.createElement("tr");
      forecast.parameters.map((p) => {
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
          weatherStatus = p.values[0];
        }
        tr.innerHTML = addForecast(
          date,
          datetimeHours + 2,
          windDirection,
          temperature,
          windStrength,
          weatherStatus
        );
        if (date == today.getUTCDate()) {
          table1.appendChild(tr);
        } else if (date == tomorrow.getUTCDate()) {
          table2.appendChild(tr);
        }
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
  var html =
    "<td>" +
    datetime +
    "</td>" +
    "<td>" +
    temperature +
    " C°" +
    "</td>" +
    "<td>" +
    windDirection +
    "(" +
    windStrength +
    " m/s" +
    ")" +
    "</td>" +
    "<td>" +
    interpretSymbol(weatherStatus) +
    "</td>";
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
