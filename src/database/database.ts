import { ICourse } from "../interfaces/course.interface";

export const courseDatabase: ICourse[] = [];

let id = 0;

export function generateId(){
    id++;

    return id;
}