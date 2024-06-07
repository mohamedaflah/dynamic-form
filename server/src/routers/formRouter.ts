import { Router } from "express";

export const formRouter = (): Router => {
  const router = Router();
  router.route(`/form-data`);
  return router;
};
