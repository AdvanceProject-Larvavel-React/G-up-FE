import PrivateLayout from "../layouts/PrivateLayout";

const privateRoutes = [
  {
    path: "dashboard",
    element: <PrivateLayout requiredRole="1" />,
    children: [
      {
        path: "",
        element: <div>Dashboard Home</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
  {
    path: "store",
    element: <PrivateLayout requiredRole="3" />,
    children: [
      {
        path: "",
        element: <div>Store Owner</div>,
      },
      {
        path: "settings",
        element: <div>Settings</div>,
      },
    ],
  },
];

export default privateRoutes;
