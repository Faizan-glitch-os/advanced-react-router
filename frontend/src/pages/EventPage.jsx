import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { eventId: "event1", title: "Event 1" },
  { eventId: "event2", title: "Event 2" },
  { eventId: "event3", title: "Event 3" },
  { eventId: "event4", title: "Event 4" },
];

export default function Eventpage() {
  return (
    <>
      <h1>Eventpage</h1>
      <ul>
        {DUMMY_EVENTS.map((eventt) => (
          <li key={eventt.eventId}>
            <h2>{eventt.eventId}</h2>
            <Link to={`/events/${eventt.eventId}`}>
              <p>{eventt.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
