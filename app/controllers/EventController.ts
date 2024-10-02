import express, { Request, Response } from "express";
import { EventsResponse } from "../types/Types";

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
        const event = req.body
        res.end(JSON.stringify(event))
    },

    delete: (_req: Request, res: Response) => {
        res.send('delete')
    }
};

export default EventController;