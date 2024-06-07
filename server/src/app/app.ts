import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { formRouter } from "../routers/formRouter";
const app: Application = express();

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(`/api`, formRouter());

export default app.listen(Number(process.env.PORT) as number, () =>
  console.log(` Server started `)
);
