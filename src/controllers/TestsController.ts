import { Terms } from "@prisma/client";
import { Request, Response } from "express";
import { getTestsByDisciplineService, postTestService } from "../services/TestsServices";
import { INewTestInfo } from "../types/TestsTypes";

export async function postNewTest(req: Request, res: Response) {
    const newTest: INewTestInfo = req.body;

    await postTestService(newTest);

    return res.sendStatus(201);
}

export async function getTestsByDiscipline(req: Request, res: Response) {
    const tests: Terms[] = await getTestsByDisciplineService();

    return res.status(200).send(tests);
}