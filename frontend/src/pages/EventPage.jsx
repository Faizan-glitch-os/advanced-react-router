import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventPage() {
  const data = useLoaderData();
  console.log(data);
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "could not fetch events from server" }),
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
