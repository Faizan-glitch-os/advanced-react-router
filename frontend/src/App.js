import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/HomePage";
import EventPage, { loader as eventLoader } from "./pages/EventPage";
import EventRoot from "./pages/EventRoot";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetailPage";
import Error from "./components/Error";
import { action as manipulateEvent } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          { index: true, element: <EventPage />, loader: eventLoader },
          {
            path: ":eventId",
            id: "edit-event",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEvent,
              },
            ],
          },

          { path: "new", element: <NewEventPage />, action: manipulateEvent },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
