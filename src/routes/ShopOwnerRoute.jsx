import { Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import RoutePath from "./RoutePath";



const storeOwnerRoutes = [
  {
    path: "",
    element: <PrivateLayout requiredRole={3}/>,
    children: [
      {
        path: "",
        element: <Navigate to="home"/>,
      },
      {
        path: "home",
        element: <div>Store Owner</div>,
      },
      {
        path: "dashboard",
        element: <div>Dashboard Store Owner</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
   
      {
        path: RoutePath.ERR_404_ROUTE,
        element: <>NotFound</>,
      }
    ],
  },
];

export default storeOwnerRoutes;