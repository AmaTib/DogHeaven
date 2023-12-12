import "./../scss/style.scss";
import { IDog } from "./models/IDog";
import { generateDogs, getWeather } from "./services/axiosServices";

const generateButton = document.getElementById("generateButton");

generateButton?.addEventListener("click", async () => {
  const dogs = await generateDogs();

  createHtmlForDogGenerator(dogs);
});

function createHtmlForDogGenerator(dogs: IDog[]) {
  const dogGeneratorContainer = document.getElementById(
    "dogGeneratorContainer"
  );
  if (dogGeneratorContainer) {
    dogGeneratorContainer.innerHTML = "";
  }

  dogs.forEach((dog) => {
    const imgContainer = document.createElement("figure");
    const dogImage = document.createElement("img");

    imgContainer.className = "imgContainer";
    dogImage.className = "dogImage";
    dogImage.src = dog.url;

    imgContainer.appendChild(dogImage);
    dogGeneratorContainer?.appendChild(imgContainer);
  });
}

async function htmlForForecast() {
  const forecastList = await getWeather();

  const forecastContainer = document.getElementById("forecastContainer");
  const forecastImageContainer = document.getElementById(
    "forecastImageContainer"
  );

  const forecastsfForNow = forecastList.slice(0, 1);

  forecastsfForNow.forEach((forecast) => {
    const feelsLike = document.createElement("div");
    const temprature = document.createElement("div");
    const description = document.createElement("div");
    const date = document.createElement("div");
    const wind = document.createElement("div");
    const weatherIcon = document.createElement("img");

    date.innerHTML = String(forecast.dt_txt);
    description.innerHTML = forecast.weather[0].description;
    wind.innerHTML = "Vind: " + String(forecast.wind.speed) + " m/s";
    temprature.innerHTML = "Temperatur: " + String(forecast.main.temp);
    feelsLike.innerHTML = "Känns som: " + String(forecast.main.feels_like);
    weatherIcon.src =
      "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

    forecastContainer?.appendChild(date);
    forecastContainer?.appendChild(description);
    forecastContainer?.appendChild(wind);
    forecastContainer?.appendChild(temprature);
    forecastContainer?.appendChild(feelsLike);
    forecastImageContainer?.appendChild(weatherIcon);
  });

  const div = document.createElement("div");

  forecastContainer?.appendChild(div);

  console.log(forecastList);
}

htmlForForecast();
