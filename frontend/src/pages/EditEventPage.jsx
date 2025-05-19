import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const data = useRouteLoaderData("edit-event");
  const event = data.event;

  return <EventForm method="PATCH" event={event} />;
}
