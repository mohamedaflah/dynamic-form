import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import { router } from "../routers/formRouter";
import { errHandler } from "../_lib/middlewares/errHandler";
const app: Application = express();

app.use(cookieParser());

const corsOption = {
  origin: [process.env.CLIENT_ORIGIN as string],
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(helmet());
app.get("/health", (_, res) => {
  res.send(` Success 😀`);
});
app.use(`/api`, router);
app.use(errHandler);
export default app.listen(Number(process.env.PORT) as number, () =>
  console.log(` Server started on port -> ${process.env.PORT}`)
);
