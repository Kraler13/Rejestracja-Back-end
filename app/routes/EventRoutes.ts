import express, { Request, Response } from "express";
import { EventsResponse } from "../types/Types";
import EventController from "../controllers/EventController";

const router = express.Router();
const EventRoutes = () => {
  router.get("/", EventController.index)
  router.post("/add", EventController.create)
  router.delete("/delete/:id", EventController.delete)

  return router;
};

export default EventRoutes;