import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Authorization } from "../modules/auth/components/Authorization";
import customerRoutes from "./CustomerRoute";
import RoutePath from "./RoutePath";
import storeOwnerRoutes from "./ShopOwnerRoute";
import superAdminRoutes from "./SuperAdminRoute";
import { LoginPage } from "../modules/auth/LoginPage";
import { AuthLayout } from "../modules/auth/layouts/AuthLayout";
import { RegisterPage } from "../modules/auth/RegisterPage";

const AppRouter = () => {
  console.clear();
  const token = localStorage.getItem("token");
  const role = useSelector((state) => state.auth.role);
  let routes = [];
  if (token && role == 2) {
    routes = [...superAdminRoutes];
  } else if (token && role == 3) {
    routes = [...storeOwnerRoutes];
  }else {
    routes = [...customerRoutes];
  }

  routes.push(
    {
      path: RoutePath.AUTH_ROUTE,
      element: token ? <Authorization /> : <AuthLayout />,
      children:[
        {
          path : "",
          element: <LoginPage/>,
        },
        {
          path:"login",
          element: <LoginPage/>,
        },
        {
          path:"register",
          element: <RegisterPage/>,
        },
      ]
    }
  );

  const routing = useRoutes(routes);
  return routing;
};

export default AppRouter;
