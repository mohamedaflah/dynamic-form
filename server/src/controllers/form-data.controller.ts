import { NextFunction, Request, Response } from "express";
import { formDataService } from "../services/form-data.service";

export const formDataController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return res
      .status(200)
      .json({ status: true, message: "Succesfull", data: formDataService() });
  } catch (error) {
    next(error);
  }
};
