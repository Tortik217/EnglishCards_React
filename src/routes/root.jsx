import { Outlet } from "react-router-dom";
import Header from "./pages/components/Header/Header";

function Root() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
       <Header />
      <div className="output">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
