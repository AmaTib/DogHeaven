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
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div3");
    const weatherIcon = document.createElement("img");

    div2.innerHTML = "Temperatur: " + String(forecast.main.temp);
    div.innerHTML = "Känns som: " + String(forecast.main.feels_like);
    div3.innerHTML = forecast.weather[0].description;
    weatherIcon.src =
      "http://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";

    forecastContainer?.appendChild(div3);
    forecastContainer?.appendChild(div2);
    forecastContainer?.appendChild(div);
    forecastImageContainer?.appendChild(weatherIcon);
  });

  const div = document.createElement("div");

  forecastContainer?.appendChild(div);

  console.log(forecastList);
}

htmlForForecast();
