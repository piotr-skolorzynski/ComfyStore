import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorElement = () => {
  const error = useRouteError();
  //   const isRouteError = isRouteErrorResponse(error);

  console.log(error);

  return <h2 className="font-bold text-4xl">There was an error...</h2>;
};

export default ErrorElement;
