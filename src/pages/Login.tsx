import { Form, Link, useNavigate } from "react-router";
import { FormInput, SubmitBtn } from "../components";
import { useAppDispatch } from "../store/store-hooks";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("welcome guest user");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("guest user login error. please try again");
    }
  };

  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-96 bg-base-100 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>

        <FormInput type="email" label="email" name="identifier" />

        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="login" />

          <button
            type="button"
            className="btn btn-secondary btn-block my-3"
            onClick={loginAsGuestUser}
          >
            guest user
          </button>

          <p className="text-center">
            Not a member yet?{" "}
            <Link
              to="/register"
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
