import { NavLink } from "react-router-dom";

function Header() {
  return (
    <ul className="nav nav-underline m-3">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/"}>
          English Cards Panel
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={"/"}>
          Main
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to={"list"}>
          Words List
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;
