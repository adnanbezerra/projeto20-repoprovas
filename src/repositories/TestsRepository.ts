import { client } from "../database/prisma";
import { INewTest } from "../types/TestsTypes";

export async function createNewTest(newTest: INewTest) {
    return client.tests.create({ data: newTest });
}