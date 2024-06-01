import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Authorization } from "../modules/auth/components/Authorization";
import Login from "../modules/auth/components/Login";
import customerRoutes from "./CustomerRoute";
import RoutePath from "./RoutePath";
import storeOwnerRoutes from "./ShopOwnerRoute";
import superAdminRoutes from "./SuperAdminRoute";

const AppRouter = () => {
  const token = localStorage.getItem("token");
  const role = useSelector((state) => state.auth.role);
  let routes = [];
  if (!token) {
    routes = [...customerRoutes];
  } else if (token && role == 2) {
    routes = [...superAdminRoutes];
  } else if (token && role == 3) {
    routes = [...storeOwnerRoutes];
  }

  routes.push(
    {
      path: RoutePath.LOGIN_ROUTE,
      element: token ? <Authorization /> : <Login />,
    }
  );

  const routing = useRoutes(routes);
  return routing;
};

export default AppRouter;
