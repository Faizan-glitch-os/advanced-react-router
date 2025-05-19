import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/HomePage";
import EventPage, { loader as eventLoader } from "./pages/EventPage";
import EventRoot from "./pages/EventRoot";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetailPage";
import Error from "./components/Error";

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
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
