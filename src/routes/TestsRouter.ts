import { Router } from "express";
import { getTestsByDiscipline, postNewTest } from "../controllers/TestsController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { ValidateToken } from "../middlewares/ValidateToken";
import { NewTestSchema } from "../schemas/NewTestSchema";

export const TestsRouter = Router();

TestsRouter.use(ValidateToken);
TestsRouter.post('/new-test', validateSchema(NewTestSchema), postNewTest);
TestsRouter.get('/tests-disciplines', getTestsByDiscipline);