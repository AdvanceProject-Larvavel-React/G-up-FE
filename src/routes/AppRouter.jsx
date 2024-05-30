import { useRoutes } from "react-router-dom";
import { NotFoundPage } from "../global-components/errors/NotFoundPage";
import privateRoutes from "./PrivateRoute";
import publicRoutes from "./PublicRoute";
import RoutePath from "./RoutePath";
import Login from "../modules/auth/components/Login";

const AppRouter = () => {
  const routes = [
    ...publicRoutes,
    ...privateRoutes,
    {
      path: "/unauthorized",
      element: <>unauthorized</>,
    },
    {
      path: RoutePath.LOGIN_ROUTE,
      element: <Login />,
    },
    {
      path: 'home',
      element: <Login />,
    },
    {
      path: RoutePath.ERR_404_ROUTE,
      element: <NotFoundPage />,
    },
  ];
  const routing = useRoutes(routes);
  return routing;
};
export default AppRouter;
