import Layout from "./components/Layout"
import { ResponseData, Result } from "./models"
import { getAllFilms } from "./sevices"
import { FilmCard } from "./components/FilmCard";

export default async function Home() {
  const data: ResponseData = await getAllFilms();
  const films = data.results;

  return (
    <Layout>
      <h2 className="text-lg font-medium mb-4">Star wars films list</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {films.map((data: Result) => (
          <li key={data.episode_id} className="mb-3 last:mb-0">

            <FilmCard data={data}/>
            
          </li>
        ))}
      </ul>
    </Layout>
  )
}
