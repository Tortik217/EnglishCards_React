import { NavLink } from "react-router-dom";
import '@/routes/pages/components/Header/Header.css'

function Header() {
  return (
    <div className="header d-flex gap-2 align-items-center">
      <div className="logo" aria-current="page">
        English Cards Panel
      </div>
      <ul className="nav nav-underline m-3">
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
    </div>
  );
}

export default Header;
