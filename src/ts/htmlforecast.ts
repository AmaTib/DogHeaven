import { getWeather } from "./services/axiosServices";

export async function htmlForForecast() {
  const forecastList = await getWeather();

  const forecastHeader = document.getElementById("forecastHeader");
  const forecastFooter = document.getElementById("forecastFooter");
  const forecastImageContainer = document.getElementById(
    "forecastImageContainer"
  );

  const forecastsfForNow = forecastList.slice(0, 1);

  forecastsfForNow.forEach((forecast) => {
    const feelsLike = document.createElement("p");
    const temprature = document.createElement("p");
    const description = document.createElement("p");
    const date = document.createElement("p");
    const wind = document.createElement("p");
    const weatherIcon = document.createElement("img");

    date.innerHTML = String(forecast.dt_txt);
    description.innerHTML = forecast.weather[0].description;
    wind.innerHTML = "Vind: " + String(forecast.wind.speed) + " m/s";
    temprature.innerHTML = "Temperatur: " + String(forecast.main.temp);
    feelsLike.innerHTML = "Känns som: " + String(forecast.main.feels_like);
    weatherIcon.src =
      "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

    forecastHeader?.appendChild(date);
    forecastHeader?.appendChild(description);
    forecastFooter?.appendChild(wind);
    forecastFooter?.appendChild(temprature);
    forecastFooter?.appendChild(feelsLike);
    forecastImageContainer?.appendChild(weatherIcon);
  });
}
