import Joi from "joi";

export const NewTestSchema = Joi.object({
    name: Joi.string().trim().required(),
    pdfUrl: Joi.string().uri().required(),
    category: Joi.string().trim().required(),
    discipline: Joi.string().trim().required(),
    teacher: Joi.string().trim().required()
})