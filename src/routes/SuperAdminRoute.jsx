import { Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import RoutePath from "./RoutePath";
import NotFoundPage from "../global-components/errors/NotFoundPage";
import { Dashboard } from "../modules/super-admin/dashboard/Dashboard";
import { UserDashboard } from "../modules/super-admin/manage-users/UserDashboard";
import { StoreDashboard } from "../modules/super-admin/manage-stores/StoreDashboard";

const superAdminRoutes = [
  {
    path: "",
    element: <PrivateLayout requiredRole={2} />,
    children: [
      {
        path: "home",
        element: <Navigate to={"/dashboard"} />,
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {path: "list-user", element: <UserDashboard/>,},
      {path: "search-user", element: <div>Create User</div>,},
      {path: "sort-user", element: <div>Sort User</div>,},
      {path: "export-user", element: <div>Export User</div>,},
      {path: "list-store", element: <StoreDashboard/>},
      {path: "create-store", element: <div>Create User</div>,},
      {path: "update-store", element: <div>Sort User</div>,},
      {path: "destroy-store-history", element: <div>Export User</div>,},
      {path: "disable-store-history", element: <div>Export User</div>,},
      {
        path: "settings",
        element: <div>Settings</div>,
      },
      {path: "profile", element: <div>Profile</div>,},
      {path: "account", element: <div>Account</div>,},
      {
        path: RoutePath.ERR_404_ROUTE,
        element: <NotFoundPage/>
      },
    ],
  },
];
export default superAdminRoutes;
