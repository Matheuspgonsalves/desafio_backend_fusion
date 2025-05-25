import Joi from "joi";
import Planets from "../../interfaces/planets.interface";

export const planetSchema: Joi.ObjectSchema<Planets> = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(2).required(),
    climate: Joi.string().required(),
    terrain: Joi.string().required(),
    population: Joi.alternatives(
        Joi.number(),
        Joi.string().valid("unknow"),
    ).required(),
});