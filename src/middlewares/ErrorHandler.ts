import { NextFunction, Request, Response } from "express"

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error.type === "error_wrongLogin") {
        return res.status(401).send({ message: error.message });
    }
    if (error.type === "error_user_inUse") {
        return res.status(422).send({ message: error.message });
    }
    if (error.type === "error_notFound") {
        return res.status(404).send({ message: error.message });
    }
    if (error.type === "error_invalid_teacherDiscipline") {
        return res.status(422).send({ message: error.message });
    }
}