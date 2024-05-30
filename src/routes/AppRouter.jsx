import { NotFoundPage } from "../global-components/errors/NotFoundPage";
import publicRoutes from "./PublicRoute";
import privateRoutes from "./PrivateRoute";
import RoutePath from "./RoutePath";
import { useRoutes } from "react-router-dom";

const AppRouter = () => {

  const routes = [
    ...publicRoutes,
    ...privateRoutes,
    {
      path: RoutePath.ERR_404_ROUTE,
      element: <NotFoundPage />,
    },
  ];
  const routing = useRoutes(routes);
  return routing;
};
export default AppRouter;