import { NavLink } from "react-router";
import type { IRouteLink } from "../models";
import { LINKS } from "../routes/links";
import { useAppSelector } from "../store/store-hooks";

const NavLinks = () => {
  const user = useAppSelector((state) => state.userState.user);

  return (
    <>
      {LINKS.map((link: IRouteLink) => {
        const { id, url, text } = link;

        if ((url === "checkout" || url === "orders") && !user) return null;

        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
