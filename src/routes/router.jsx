import { createBrowserRouter } from "react-router-dom";
import EngCardsPanel from '@/routes/pages/components/EngCardsPanel/EngCardsPanel'
import { getCards } from "@/data/forStorage";
import Root from "./root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { 
        index: true, 
        element:  <EngCardsPanel />,
        loader: getCards,
      },
    ],
  },
]);

export default router
