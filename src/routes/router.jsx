import { Outlet, createBrowserRouter } from "react-router-dom";
import EngCardsPanel from '@/routes/pages/components/EngCardsPanel/EngCardsPanel'
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element:  <EngCardsPanel />},
      // { path: "city/:id", element: <City /> },
      // { path: "country/:id", element: <CountryPage /> },
    ],
  },
]);

export default router
