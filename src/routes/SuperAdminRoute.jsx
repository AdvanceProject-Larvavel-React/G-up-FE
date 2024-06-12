import { Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import RoutePath from "./RoutePath";
import NotFoundPage from "../global-components/errors/NotFoundPage";
import { Dashboard } from "../modules/super-admin/dashboard/Dashboard";
import { UserDashboard } from "../modules/super-admin/manage-users/UserDashboard";
import { StoreDashboard } from "../modules/super-admin/manage-stores/StoreDashboard";
import { UserDisabled } from "../modules/super-admin/manage-users/UserDisabled";
import { StoreInActive } from "../modules/super-admin/manage-stores/StoreInActive";
import { CategoryDashboard } from "../modules/super-admin/manage-category/CategoryDashboard";
import { CategoryInActive } from "../modules/super-admin/manage-category/CategoryInActive";
import { ColorThemeSettings } from "../modules/super-admin/setting/ColorThemeSettings";
import { Language } from "../modules/super-admin/setting/Language";

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
      {path: "list-disable-user", element: <UserDisabled/>,},
     
      {path: "list-store", element: <StoreDashboard/>},
      {path: "list-disable-store", element: <StoreInActive/>},

      {path: "list-category", element: <CategoryDashboard/>},
      {path: "list-disable-category", element: <CategoryInActive/>},

      {
        path: "settings",
        element: <div>Settings</div>,
      },
      {path: "theme-options", element: <ColorThemeSettings/>,},
      {path: "language", element: <Language/> },
      {
        path: RoutePath.ERR_404_ROUTE,
        element: <NotFoundPage/>
      },
    ],
  },
];
export default superAdminRoutes;
