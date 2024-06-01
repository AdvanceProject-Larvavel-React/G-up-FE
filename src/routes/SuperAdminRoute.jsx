import PrivateLayout from "../layouts/PrivateLayout";
import RoutePath from "./RoutePath";

const superAdminRoutes = [
  {
    path: "",
    element: <PrivateLayout requiredRole={2} />,
    children: [
      {
        path: "dashboard",
        element: <div>Dashboard Home</div>,
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
  }
];
export default superAdminRoutes;