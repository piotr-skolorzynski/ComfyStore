import { Outlet } from "react-router";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />

      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
