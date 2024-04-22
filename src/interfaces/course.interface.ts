export interface ICourse{
    id: number;
    title: string;
    description: string;
    price: number;
    level: string;
    createdAt: Date;
    updatedAt?: Date;
}

export type TCreateCourseData = Pick<ICourse, "title" | "description" | "price" | "level">;

export type TUpdateCourseData = Partial<TCreateCourseData>;