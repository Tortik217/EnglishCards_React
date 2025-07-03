import { createBrowserRouter } from "react-router-dom";
import EngCardsPanel from "@/routes/pages/components/EngCardsPanel/EngCardsPanel";
import { getCards, getAllWords } from "@/data/forStorage";
import Root from "./root";
import WordsList from "@/routes/pages/components/WordsList/WordsList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: getCards,
    children: [
      {
        index: true,
        element: <EngCardsPanel />,
      },
      {
        path: "list",
        element: <WordsList />,
        loader: getAllWords,
      },
    ],
  },
]);

export default router;
