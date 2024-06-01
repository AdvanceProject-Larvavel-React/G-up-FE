import { Navigate } from "react-router-dom";
import RoutePath from "./RoutePath";

const customerRoutes = [
  {
    path: "",
    element: <Navigate to="home"/>,
  },
  {
    path: "home",
    element: <>Home page</>,
  },
  {
    path: RoutePath.ERR_404_ROUTE,
    element: <>NotFound</>,
  }
];
export default customerRoutes;