import { IMovie } from "./models/IMovie";
import { generateMoviePosters } from "./services/axiosServices";

export function htmlForMoviesTemplate(movie: IMovie) {
  const movieContainer = document.getElementById("movieContainer");

  const movieWrapper = document.createElement("div");
  const imgForPoster = document.createElement("img");
  const h4ForTitle = document.createElement("h4");

  movieWrapper.id = "movieWrapper";
  movieWrapper.setAttribute("data-toggle", "modal");
  movieWrapper.setAttribute("data-target", "#movieModal");
  imgForPoster.setAttribute("src", movie.Poster);
  h4ForTitle.innerHTML = movie.Title + " " + "(" + movie.Year + ")";

  movieWrapper.appendChild(imgForPoster);
  movieWrapper.appendChild(h4ForTitle);
  movieContainer?.appendChild(movieWrapper);

  movieWrapper.addEventListener("click", () => {
    const modalBody = document.getElementById("modalBody");
    const modalTitle = document.getElementById(
      "modalTitle"
    ) as HTMLHeadingElement;
    const genreTag = document.createElement("p");
    const plotTag = document.createElement("p");
    const actorsTag = document.createElement("p");
    const directorTag = document.createElement("p");
    const ratingTag = document.createElement("p");

    modalTitle.innerHTML = movie.Title;
    genreTag.innerHTML = movie.Genre;
    plotTag.innerText = movie.Plot;
    actorsTag.innerText = "Actors: " + movie.Actors;
    directorTag.innerText = "Director: " + movie.Director;
    ratingTag.innerText = "imdb Rating: " + movie.imdbRating;

    modalBody?.appendChild(genreTag);
    modalBody?.appendChild(plotTag);
    modalBody?.appendChild(actorsTag);
    modalBody?.appendChild(directorTag);
    modalBody?.appendChild(ratingTag);
  });
}

export async function createHtmlForMovies() {
  const movies = [
    await generateMoviePosters("tt0110305"),
    await generateMoviePosters("tt10384944"),
    await generateMoviePosters("tt11252248"),
    await generateMoviePosters("tt1753383"),
  ];

  movies.forEach((movie) => {
    console.log("Movie data:", movie);
    htmlForMoviesTemplate(movie);
  });
}
