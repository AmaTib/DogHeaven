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

  console.log(forecastList);
}

htmlForForecast();

/* HAMBURGERMENY */
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".navUl");

hamburger?.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navUl?.classList.toggle("active");

  console.log("livstecken");
});

document.querySelectorAll(".navLink").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger?.classList.remove("active");
    navUl?.classList.remove("active");
  })
);

//DOGWALKER IMAGE
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //If the element is visible
    if (entry.isIntersecting) {
      //Add the animation class
      entry.target.classList.add("dogWalkerMoving");
    } else {
      entry.target.classList.remove("dogWalkerMoving");
    }
  });
});

const dogWalkerImg = document.getElementById("dogWalker") as HTMLImageElement;
observer.observe(dogWalkerImg);
