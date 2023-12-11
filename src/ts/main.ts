import "./../scss/style.scss";
import { IDog } from "./models/IDog";
import { generateDogs } from "./services/axiosServices";

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
