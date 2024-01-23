import "./../scss/style.scss";
import { htmlForForecast } from "./htmlforecast";
import { createHtmlForDogGenerator } from "./htmlgeneratedogimg";
import { createHtmlForMovies } from "./htmlmoviesection";
import { generateDogs } from "./services/axiosServices";

//GENERATE DOGS WHEN CLICKING BUTTON
const generateButton = document.getElementById("generateButton");
generateButton?.addEventListener("click", async () => {
  const dogs = await generateDogs();

  //Gömmer tassavtrycken när man genererar hundbilder
  document.querySelectorAll(".pawprints").forEach((element) => {
    element.classList.add("hide");
  });
  pawprintsNr2?.removeAttribute("id");

  createHtmlForDogGenerator(dogs);
});

htmlForForecast();

createHtmlForMovies();

/* HAMBURGERMENU */
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
    }
    /*  else {
      entry.target.classList.remove("dogWalkerMoving");
    } */
  });
});

const dogWalkerImg = document.getElementById("dogWalker") as HTMLImageElement;
observer.observe(dogWalkerImg);

//PAWPRINTS ANIMATION ON SCROLL
const pawprintsNr2 = document.getElementById("pawprintsNr2");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //If the element is visible
    if (entry.isIntersecting) {
      //Add the animation class
      entry.target.classList.add("firstPawprintAnimation");

      if (pawprintsNr2) {
        pawprintsNr2.id = "secondPawprintShowing";
      }
    }
  });
});

const pawprints = document.getElementById("pawprintsNr1") as HTMLImageElement;
observer2.observe(pawprints);
