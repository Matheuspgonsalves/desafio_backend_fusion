import { Router } from "express";
import planetsRoutes from "./planetsRoutes";

const router = Router();

router.use('/planets', planetsRoutes);

export default router;