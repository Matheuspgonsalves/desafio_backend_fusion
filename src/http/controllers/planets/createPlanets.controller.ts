import {Request, Response} from "express";
import { planetSchema } from "../../validators/planets.validator";
import { createPlanets } from "../../../services/planets/planets.service";

export const createPlanetsController = async (req: Request, res: Response) => {
    const {error, value} = planetSchema.validate(req.body);

    if(error){
        return res.status(400).json({
            message: "Dados inválidos",
            details: error.details.map((err) => err.message),
        });
    }

    try {
        const result = await createPlanets(value);
        return res.status(201).json({message: "OK", result});
    } catch (err) {
        return res.status(500).json({message: "Error: ", error: err});
    }
}
