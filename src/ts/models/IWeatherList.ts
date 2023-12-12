import { IForecastTemp } from "./IForecastTemp";
import { IForecastWeather } from "./IForecastWeather";
import { IForecastWind } from "./IForecastWind";

export interface IWeatherList {
  main: IForecastTemp;
  weather: IForecastWeather[];
  wind: IForecastWind;
  dt_txt: number;
}
