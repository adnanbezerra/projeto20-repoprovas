import { Router } from "express";
import { validateSchema } from "../middlewares/ValidateSchema";
import { SigninSchema } from "../schemas/SigninSchema";
import { SignupSchema } from "../schemas/SignupSchema";

export const UserRouter = Router();

UserRouter.post("/signin", validateSchema(SigninSchema));
UserRouter.post("/signup", validateSchema(SignupSchema));