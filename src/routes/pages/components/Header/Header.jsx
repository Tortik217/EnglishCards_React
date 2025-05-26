import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav nav-underline m-3">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/"}>
          Country Panel
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={"/"}>
          Main
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
