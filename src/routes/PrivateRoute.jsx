import PrivateLayout from "../layouts/PrivateLayout";

const privateRoutes = [
  {
    path: 'dashboard',
    element: <PrivateLayout />,
    children: [
      {
        path: '',
        element: <div>Dashboard Home</div>,
      },
      {
        path: 'settings',
        element: <div>Settings</div>,
      }
    ],
  },
];

export default privateRoutes;