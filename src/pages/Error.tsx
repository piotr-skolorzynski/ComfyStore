import React from "react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

const Error: React.FC = () => {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-semibold -tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we could't find the page you're looking for.
          </p>

          <div className="mt-10">
            <Link to="/" className="btn btn-secondary uppercase">
              go back home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">there was an error...</h4>
    </main>
  );
};

export default Error;
