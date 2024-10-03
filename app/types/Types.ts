
export interface KeyValue {
    key: string;
    val: string;
}

export interface Event {
    name: string;
    event: KeyValue;
    city: KeyValue;
}

export interface EventsResponse {
    events: Event[];
}

export interface IEvent extends Document {
    name: string;
    event: {
      key: string;
      val: string;
    };
    city: {
      key: string;
      val: string;
    };
  }