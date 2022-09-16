import { Categories } from "@prisma/client";
import { client } from "../database/prisma";

export async function getCategoryByName(categoryName: string) {
    return client.categories.findFirst({ where: { name: categoryName } });
}