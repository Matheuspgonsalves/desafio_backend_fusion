import { Router } from "express";
import { createPlanets } from "../controllers/planets/createPlanets.controller";
import { getAllPlanets } from "../controllers/planets/getAllPlanets.controller";
import { getPlanetsById } from "../controllers/planets/getPlanetsById.controller";
import { updatePlanetsById } from "../controllers/planets/updatePlanetsById.controller";
import { deletePlanetsById } from "../controllers/planets/deletePlanetsById.controller";

const router = Router();

router.post('/', createPlanets);
router.get('/', getAllPlanets);
router.get('/:id', getPlanetsById);
router.put('/:id', updatePlanetsById);
router.delete('/:id', deletePlanetsById);

export default router;