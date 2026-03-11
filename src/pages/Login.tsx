import { Form, Link } from "react-router";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-96 bg-base-100 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />

          <button type="button" className="btn btn-secondary btn-block my-3">
            guest user
          </button>

          <p className="text-center">
            Not a member yet?{" "}
            <Link
              to="/regitser"
              className="ml-2 link link-hover link-primary capitalize"
            >
              register
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;
