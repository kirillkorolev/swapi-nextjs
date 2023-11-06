import { Person, Result } from "."

export interface ResponseData {
    count: number;
    next: any;
    previous: any;
    results: Result[];
}