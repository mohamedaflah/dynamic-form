import { Router } from "express";
import { formDataController } from "../controllers/form-data.controller";

export const router = Router();
router.route(`/form-data`).get(formDataController);
