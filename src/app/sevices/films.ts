export const getAllFilms = async () => {
  const response = await fetch("https://swapi.dev/api/films/");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
