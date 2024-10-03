import express, { Request, Response } from "express";
import { EventsResponse, IEvent } from "../types/Types";
import EventModel from "../models/EventModel";
import { error } from "console";

const router = express.Router();


const EventController = {
  index: (_req: Request, res: Response<EventsResponse>) => {
    res.json({
      events: [
        {
          name: "Filip",
          event: { key: "front-end", val: "Front End" },
          city: { key: "cracow", val: "Kraków" }
        },
        {
          name: "Ali",
          event: { key: "back-end", val: "Back End" },
          city: { key: "warsaw", val: "Warszawa" }
        },
      ],
    });
  },

  create: (req: Request, res: Response) => {
    const event = new EventModel({
      name: req.body.name,
      event: req.body.event,
      city: req.body.city
    })
    event.save()
      .then((savedEvent) => {
        return res.status(201).json(savedEvent);
      })
      .catch((err) => {
        return res.status(500).json({
          message: 'Error while creating event',
          error: err
        });
      });
  },


  delete: (req: Request, res: Response) => {
    const id = req.params.id;
  
    // Typy dla err i event
    EventModel.findByIdAndDelete(id, (err: Error | null, event: IEvent | null) => {
      if (err) {
        return res.status(500).json({
          message: "Error while deleting event",
          error: err,
        });
      }
  
      // Jeśli zdarzenie nie zostało znalezione
      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }
  
      return res.status(200).json({
        id: id,
        deleted: true,
      });
    });
  }
};

export default EventController;