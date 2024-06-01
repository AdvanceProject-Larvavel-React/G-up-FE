import { Navigate, useRoutes } from "react-router-dom";
import RoutePath from "./RoutePath";
import DetailProductPage from "../modules/DetailProduct/Index.jsx";
import { NotFoundPage } from "../global-components/errors/NotFoundPage.jsx";
const AppRouter = () => {
  return useRoutes([
    {
      path: RoutePath.HOME_ROUTE,
      element: <Navigate to="/hello-word" />,
    },
    {
      path: "/hello-word",
      element: (
        <>
          <h2>Hello Word</h2>
        </>
      ),
    },
    {
      path: "/detail/:id",
      element: (
        <>
          <DetailProductPage />
        </>
      ),
    },
    {
      path: RoutePath.ERR_404_ROUTE,
      element: <NotFoundPage />,
    },
  ]);
};

export default AppRouter;