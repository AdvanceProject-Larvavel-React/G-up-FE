import { Navigate } from "react-router-dom";
import Header from "../global-components/core/headers/Header.jsx";
import NotFoundPage from "../global-components/errors/NotFoundPage.jsx";
import { MainLayout } from "../layouts/MainLayout.jsx";
import { FormCheckOut } from "../modules/cart/components/FormCheckOut.jsx";
import Contact from "../modules/contact/Contact.jsx";
import { Index } from "../modules/detail-product/Index";
import { CategoryBody } from "../modules/homePage/CategoryBody.jsx";
import { MainBody } from "../modules/homePage/MainBody.jsx";
import InformationStore from "../modules/profile/components/information-store/InformationStore.jsx";
import Profile from "../modules/profile/components/profile/Profile.jsx";
import SaveChange from "../modules/profile/components/save-change/SaveChange.jsx";
import Setting from "../modules/profile/components/settings/Setting.jsx";
import ProfileLayout from "../modules/profile/layouts/ProfileLayout";
import PaymentStatus from "../modules/status-order/components/PaymentStatus.jsx";
import Store from "../modules/store/Store";
import CategoryDetail from "../modules/support-page/CategoryDetail";
import ContentSection from "../modules/support-page/components/Content";
import Support from "../modules/support-page/index";
import RoutePath from "./RoutePath";
const CustomerRoutes = [
  {
    path: "",
    element: <Navigate to="home" />,
  },
  {
    path: "home",
    element: <MainLayout/>,
    children: [
      { path: "", element: <MainBody/>,},
      { path: "category/:id", element: <CategoryBody/>,},
    ],
  },
  {
    path:"/category", 
    element: 
      <>
      <Header/>
      <CategoryBody/>
      </>
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

    path: "store/:id",
    children: [
      {
        path: "",
        element: <Store />,
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
    path: "/product/:id",
    element: <Index />,
  },
  {
    path: RoutePath.ERR_404_ROUTE,
    element: <NotFoundPage/>,
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
