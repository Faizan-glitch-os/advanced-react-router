import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Homepage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import EventRoot from "./pages/EventRoot";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage from "./pages/EventDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/events",
        element: <EventRoot />,
        children: [
          { index: true, element: <EventPage /> },
          { path: "/events/:eventId", element: <EventDetailPage /> },
          { path: "/events/new", element: <NewEventPage /> },
          { path: "/events/:eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
