import mongoose, { Schema, Document } from "mongoose";
import { IEvent } from "../types/Types";

const EventSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  event: {
    key: {
      type: String,
      required: true,
    },
    val: {
      type: String,
      required: true,
    },
  },
  city: {
    key: {
      type: String,
      required: true,
    },
    val: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model<IEvent>("Event", EventSchema);