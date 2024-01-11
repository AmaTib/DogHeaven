import "./../scss/style.scss";
import { htmlForForecast } from "./htmlforecast";
import { createHtmlForDogGenerator } from "./htmlgeneratedogimg";
import { createHtmlForMovies } from "./htmlmoviesection";
import { generateDogs } from "./services/axiosServices";

const generateButton = document.getElementById("generateButton");
generateButton?.addEventListener("click", async () => {
  const dogs = await generateDogs();

  createHtmlForDogGenerator(dogs);
});

htmlForForecast();

createHtmlForMovies();

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

//DOGWALKER IMAGE ANIMATION ON SCROLL
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
