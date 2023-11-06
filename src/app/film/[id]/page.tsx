

import Layout from "@/app/components/Layout";
import { CHARACTER } from "@/app/constants";
import { getIdFromUrl } from "@/app/helpers";
import { FilmDetails, Result } from "@/app/models";
import { getAllFilms, getFilmData } from "@/app/sevices";
import { getCharacters } from "@/app/sevices/getCharacters";
import Link from "next/link";

export async function generateStaticParams() {
    const data = await getAllFilms();
    const films = data.results;

    return films.map((result: Result) => ({
      id: getIdFromUrl(result.url),
    }))
}

export default async function Film({ params: { id } }: { params: { id: string }}) {
  const data: FilmDetails = await getFilmData(id);
  const characters = (await getCharacters(data.characters)).map(it => ({ id: getIdFromUrl(it.url), name: it.name}))

  return (
    <Layout>
      <Link href={'/'} className="link mb-4">Back to films list</Link>
          
      <h2 className="text-lg font-medium mb-3">{data.title}</h2>
      <div className="mb-3"><span className="font-medium">Director:</span> {data.director}</div>
      <div className="mb-3"><span className="font-medium">Producer:</span> {data.producer}</div>
      <p><span className="font-medium">Opening Crawl:</span> {data.opening_crawl}</p>

      <div className="font-medium text-lg my-4">Characters list:</div>
      
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
        {characters.map((item) => (
          <li key={`${item.id}-${item.name}`}>
            <Link 
              className="link mb-4"
              href={`/${CHARACTER}/${item.id}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
