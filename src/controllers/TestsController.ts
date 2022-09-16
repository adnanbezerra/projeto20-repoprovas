import { Request, Response } from "express";
import { postTestService } from "../services/TestsServices";
import { INewTestInfo } from "../types/TestsTypes";

export async function postNewTest(req: Request, res: Response) {
    const newTest: INewTestInfo = req.body;

    await postTestService(newTest);

    return res.sendStatus(201);
}