import Link from "next/link"
import { Result } from "../models"
import { FILM } from "../constants"
import { getIdFromUrl } from "../helpers"

interface FilmCardProps {
    data: Result
}

export const FilmCard = ( { data }: FilmCardProps) => {
    const id = getIdFromUrl(data.url)

    return (
        <div className="p-4 bg-slate-100 border-stone-300 rounded-lg h-full">
            <Link href={`/${FILM}/${id}`} className="link font-medium">
                <h3>{data.title}</h3>
            </Link>
            
            <div className="mb-3"><span className="font-medium">Director:</span> {data.director}</div>
            <div className="mb-3"><span className="font-medium">Producer:</span> {data.producer}</div>
            <p className="mb-3"><span className="font-medium">Opening Crawl:</span> {data.opening_crawl}</p>
        </div>
    )
}
