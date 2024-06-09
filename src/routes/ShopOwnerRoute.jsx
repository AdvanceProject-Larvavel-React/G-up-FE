import { Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import RoutePath from "./RoutePath";
import ProfileLayout from "../modules/profile/layouts/ProfileLayout";
import Profile from "../modules/profile/components/profile/Profile";
import InformationStore from "../modules/profile/components/information-store/InformationStore";
import SaveChange from "../modules/profile/components/save-change/SaveChange";
import Setting from "../modules/profile/components/settings/Setting";
import ProductDashboard from "../modules/store-admin/ProductDashboard";


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
        element: <ProductDashboard  />,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            path: "",
            element: <Profile />,
          },
          {
            path: "informationShop",
            element: <InformationStore />,
          },
          {
            path: "saveChange",
            element: <SaveChange />,
          },
          {
            path: "setting",
            element: <Setting />,
          },
        ],
      },
      {
        path: RoutePath.ERR_404_ROUTE,
        element: <>NotFound</>,
      }
    ],
  },
];

export default storeOwnerRoutes;