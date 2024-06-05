import { Navigate } from "react-router-dom";
import RoutePath from "./RoutePath";
import ProfileLayout from "../modules/profile/layouts/ProfileLayout";
import InformationStore from "../modules/profile/components/information-store/InformationStore.jsx";
import Profile from "../modules/profile/components/profile/Profile.jsx";
import SaveChange from "../modules/profile/components/save-change/SaveChange.jsx";
import Setting from "../modules/profile/components/settings/Setting.jsx";
import Contact from "../modules/contact/Contact.jsx";

const customerRoutes = [
  {
    path: "",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <>Home page</>,
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
  },
  {
    path: "contact",
    element: <Contact />,
  },
];
export default customerRoutes;