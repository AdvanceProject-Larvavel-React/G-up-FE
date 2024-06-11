import { Navigate } from "react-router-dom";
import RoutePath from "./RoutePath";
import ProfileLayout from "../modules/profile/layouts/ProfileLayout";
import InformationStore from "../modules/profile/components/information-store/InformationStore.jsx";
import Profile from "../modules/profile/components/profile/Profile.jsx";
import SaveChange from "../modules/profile/components/save-change/SaveChange.jsx";
import Setting from "../modules/profile/components/settings/Setting.jsx";
import Contact from "../modules/contact/Contact.jsx";
import Support from "../modules/support-page/index"
import CategoryDetail from "../modules/support-page/CategoryDetail"
import ContentSection from "../modules/support-page/components/Content";
import { Index } from "../modules/detail-product/Index";
import { FormCheckOut } from "../modules/cart/components/FormCheckOut.jsx";
import PaymentStatus from "../modules/status-order/components/PaymentStatus.jsx";
const CustomerRoutes = [
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
  path: "/support",
  element: <Support />,
  children: [
    { path: "", element: <ContentSection /> },
    { path: "index", element: <ContentSection /> },
    { path: "index/:id", element: <CategoryDetail /> },
    ]
  },
  {
    path:"/product/:id",
    element: <Index/>,
  },
  {
    path: RoutePath.ERR_404_ROUTE,
    element: <>NotFound</>,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "checkout",
    element: <FormCheckOut />,
  },
  {path:"/payment/redirect", element:<PaymentStatus/>},

];
export default CustomerRoutes;