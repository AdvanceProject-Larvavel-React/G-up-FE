import PublicLayout from "../layouts/PublicLayout";
import RoutePath from "./RoutePath";

const publicRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        path: RoutePath.HOME_ROUTE,
        element: (
          <>
            <div>Home page</div>
          </>
        )
      }
    ],
  },
  {
    path: '/login',
    element: <div>Login page</div>
  }
];
export default publicRoutes;