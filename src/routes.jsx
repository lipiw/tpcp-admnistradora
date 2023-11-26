import { Home } from "@/pages";
import { Calculator } from "@/pages";
import { History } from "@/pages";
import {
  HomeIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: HomeIcon,
    name: "calculadora",
    path: "/calculadora",
    element: <Calculator />,
  },
  {
    icon: HomeIcon,
    name: "historico",
    path: "/historico",
    element: <History />,
  }
];

export default routes;
