import { Navigate } from "react-router-dom";
import RoutePath from "./RoutePath";
import ProfileLayout from "../layouts/ProfileLayout";
import Contact from "../pages/Contact/Contact";
import InformationStore from "../pages/InformationStore/InformationStore";
import Profile from "../pages/Profile/Profile";
import SaveChange from "../pages/SaveChange/SaveChange";
import Setting from "../pages/Setting/Setting";

const customerRoutes = [
  {
    path: "",
    element: <Navigate to="home"/>,
  },
  {
    path: "home",
    element: <>Home page</>,
  },
  {
    path: RoutePath.PROFILE_ROUTE,
    element: (
      <ProfileLayout>
        <Profile />
      </ProfileLayout>
    ),
  },
  {
    path: RoutePath.INFORMATION_STORE_ROUTE,
    element: (
      <ProfileLayout>
        <InformationStore />
      </ProfileLayout>
    ),
  },
  {
    path: RoutePath.SAVE_CHANGE_ROUTE,
    element: (
      <ProfileLayout>
        <SaveChange />
      </ProfileLayout>
    ),
  },
  {
    path: RoutePath.SETTING_ROUTE,
    element: (
      <ProfileLayout>
        <Setting />
      </ProfileLayout>
    ),
  },
  {
    path: RoutePath.CONTACT_ROUTE,
    element: (
      <>
        <Contact />
      </>
    ),
  },
  {
    path: RoutePath.ERR_404_ROUTE,
    element: <>NotFound</>,
  }
];
export default customerRoutes;