import { IMovie } from "./models/IMovie";
import { generateMoviePosters } from "./services/axiosServices";

export function htmlForMoviesTemplate(movie: IMovie) {
  const movieContainer = document.getElementById("movieContainer");

  const movieWrapper = document.createElement("div");
  const imgForPoster = document.createElement("img");
  const h4ForTitle = document.createElement("h4");
  const pForYear = document.createElement("p");

  imgForPoster.setAttribute("src", movie.Poster);
  h4ForTitle.innerHTML = movie.Title;
  pForYear.innerHTML = movie.Year;

  movieWrapper.appendChild(imgForPoster);
  movieWrapper.appendChild(h4ForTitle);
  movieWrapper.appendChild(pForYear);
  movieContainer?.appendChild(movieWrapper);
}

export async function createHtmlForMovies() {
  const movies = [
    await generateMoviePosters("tt0110305"),
    await generateMoviePosters("tt10384944"),
    await generateMoviePosters("tt11252248"),
  ];

  movies.forEach((movie) => {
    console.log("Movie data:", movie);
    htmlForMoviesTemplate(movie);
  });
}
