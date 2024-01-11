import { IDog } from "./models/IDog";

export function createHtmlForDogGenerator(dogs: IDog[]) {
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
