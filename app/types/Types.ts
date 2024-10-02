
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