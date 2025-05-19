import { useRouteError } from "react-router-dom";
import MainNavigation from "./MainNavigation";

export default function Error() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "could not find the page";

  if (error.status === 400) {
    title = "fetching events failed";
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "could not found the page you are looking";
  }

  return (
    <>
      <MainNavigation />
      <h2>{title}</h2>
      <p>{message}</p>
    </>
  );
}
