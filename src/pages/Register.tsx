import { Form, Link } from "react-router";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-96 bg-base-100 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>

        <FormInput label="username" name="username" />

        <FormInput type="email" label="email" name="email" />

        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="register" />

          <p className="text-center mt-3">
            Already a member?
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary capitalize"
            >
              login
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Register;
