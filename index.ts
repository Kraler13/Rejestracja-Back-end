import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import config from "./config";
import EventRoutes from "./app/routes/EventRoutes";
import mongoose from "mongoose";

const mongoUrl = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`

mongoose
  .connect(mongoUrl, {})
  .then(() => {
    console.log("połączona z mongo")
  })
  .catch((err) => {
    throw err
  })

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