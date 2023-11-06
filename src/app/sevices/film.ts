import { FilmDetails } from "../models";

export const getFilmData = async (id: string) => {
  const response = await fetch(`https://swapi.dev/api/films/${id}`);

  if (!response.ok) throw new Error("Unable to fetch films.");

  return response.json();
};

export async function getFilmDetailsList(urls: any[]) {
  const arr: FilmDetails[] = []
  
  await Promise.all(
    urls.map(it => fetch(it).then(res => res.json()).then(it => arr.push(it)))
  );
  
  return arr;
}