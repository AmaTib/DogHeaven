import { IDog } from "../models/IDog";
import { IMovie } from "../models/IMovie";
import { IWeatherApiResponse } from "../models/IWeatherApiResponse";
import { get } from "./serviceBase";

export async function generateDogs() {
  const url = "https://api.thedogapi.com/v1/images/search?limit=10";
  const data = get<IDog[]>(url);
  return data;
}

export async function getWeather() {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=59.3293&lon=18.0686&appid=f33fe191b722c6436a075891d213366d&units=metric&lang=sv";
  const data = get<IWeatherApiResponse>(url);
  return (await data).list;
}

export async function generateMoviePosters(movieId: string) {
  const url = "https://www.omdbapi.com/?apikey=a184af6e&i=" + movieId;
  const data = get<IMovie>(url);
  return data;
}
