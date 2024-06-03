import { Navigate } from "react-router-dom";
import RoutePath from "./RoutePath";
import Support from "../modules/support-page/index"
import CategoryDetail from "../modules/support-page/CategoryDetail"
import ContentSection from "../modules/support-page/components/Content";
const CustomerRoutes = [
  {
    path: "",
    element: <Navigate to="home"/>,
  },
  {
    path: "home",
    element: <>Home page</>,
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
    path: RoutePath.ERR_404_ROUTE,
    element: <>NotFound</>,
  }
];
export default CustomerRoutes;