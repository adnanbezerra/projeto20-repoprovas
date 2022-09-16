import { Tests } from "@prisma/client";

export type INewTest = Omit<Tests, "id">;

export type INewTestInfo = {
    name: string,
    pdfUrl: string,
    category: string,
    teacher: string,
    discipline: string
}