import Layout from "@/app/components/Layout";
import { FILM } from "@/app/constants";
import { getIdFromUrl } from "@/app/helpers";
import { FilmDetails, Person, ResponseData, Result } from "@/app/models";
import { getAllFilms, getCharacterData, getFilmDetailsList } from "@/app/sevices";
import Link from "next/link";

export async function generateStaticParams() {
    const response: ResponseData = await getAllFilms();
    const characters = response.results.map((it: Result) => it.characters).reduce((a, b) => a.concat(b), [])
    const uniquCharacters = new Set(characters);

    return Array.from(uniquCharacters).map((result: any) => ({
        id: getIdFromUrl(result)
    }))
}

export default async function Character({ params: { id } }: { params: { id: string }}) {
    const data: Person = await getCharacterData(id)
    const films = (await getFilmDetailsList(data.films)).map((it: FilmDetails) => ({ id: getIdFromUrl(it.url), title: it.title }))

    return (
        <Layout>
            <a className="link mb-4" href={'/'}>Back to the films list</a>
            <div className="text-lg font-medium mb-3">{data.name}</div>

            <div className="mb-3">Films list:</div>
            {films.length > 0 && (
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
                    {films.map((it) => (
                        <li key={`${it.id}`}>
                            <Link className="link" href={`/${FILM}/${it.id}`}>{it.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        
        </Layout>
    )
}