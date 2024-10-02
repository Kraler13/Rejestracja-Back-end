import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import config from "./config";
import EventRoutes from "./app/routes/EventRoutes";
dotenv.config();

const app: Express = express();
const port = config.app.port || 8080;

app.use(express.json())


app.use('/events', EventRoutes())

app.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log('Działa')
  console.log(`[server]: Server is running at http://localhost:${port}`);
});