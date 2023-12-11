import { IDog } from "../models/IDog";
import { get } from "./serviceBase";

export async function generateDogs() {
  const url = "https://api.thedogapi.com/v1/images/search?limit=10";
  const data = get<IDog[]>(url);
  return data;
}
