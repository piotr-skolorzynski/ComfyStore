import { NavLink } from "react-router";
import type { IRouteLink } from "../models";
import { LINKS } from "../routes/links";

const NavLinks = () => {
  return (
    <>
      {LINKS.map((link: IRouteLink) => {
        const { id, url, text } = link;

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
