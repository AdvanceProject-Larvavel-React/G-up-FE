import { Navigate } from "react-router-dom";
import Footer from "../global-components/core/footers/Footer.jsx";
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
import { ListStore } from "../modules/store/ListStore.jsx";
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
    element: <MainLayout />,
    children: [
      { path: "", element: <MainBody /> },
      { path: "category/:id", element: <CategoryBody /> },
    ],
  },
  {
    path: "list-store",
    element: (
      <>
        <Header />
        <br />
        <h2
          style={{
            boxShadow: '0px 4px 10px rgba(255, 20, 20, 0.1)', 
            transform: "translate(0%, 50%)",
            textAlign:"center",
            padding: "12px 48px",
            color: "#ff2e2e",
            background:
              "linear-gradient(to right, #9f9f9f 0, #ffaaaa 10%, #868686 100%)",
            backgroundPosition: "0",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shine 3s infinite linear",
            animationFillMode: "forwards",
            WebkitTextSizeAdjust: "none",
            fontWeight: 900,
            fontSize: "60px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            fontFamily: "Poppins, sans-serif",
            border:"1px solid grey",
            marginBottom:"50px",
          }}
        >
          All Stores
        </h2>
        <ListStore />
        <br />
        <hr />
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <br />
        <CategoryBody />
        <br />
        <Footer />
      </>
    ),
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
<<<<<<< HEAD
  path: "/support",
  element: <Support />,
  children: [
    { path: "", element: <ContentSection /> },
    { path: "index", element: <ContentSection /> },
    { path: "index/:id", element: <CategoryDetail /> },
    ]
=======
    path: "/support",
    element: <Support />,
    children: [
      { path: "", element: <ContentSection /> },
      { path: "index", element: <ContentSection /> },
      { path: "index/:id", element: <CategoryDetail /> },
    ],
>>>>>>> e475ae3a7c76137ed1f6a539f46323404cb0e2d6
  },
  {
    path: "/product/:id",
    element: <Index />,
  },
  {
    path: RoutePath.ERR_404_ROUTE,
    element: <NotFoundPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "checkout",
    element: <FormCheckOut />,
  },
  { path: "/payment/redirect", element: <PaymentStatus /> },
];
export default CustomerRoutes;
