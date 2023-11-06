import { Person } from "../models";

export async function getCharacters(urls: any[]) {
    const arr: Person[] = []
  
    await Promise.all(
      urls.map(it => fetch(it).then(res => res.json()).then(it => arr.push(it)))
    );
  
    return arr
  }