// src/router/AppRouter.jsx
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { AccessDeniedPage } from '../global-components/errors/AccessDeniedPage';
import { InvalidDataErrorPage } from '../global-components/errors/InvalidDataErrorPage';
import { NetworkErrorPage } from '../global-components/errors/NetworkErrorPage';
import { NotFoundPage } from '../global-components/errors/NotFoundPage';
import { ServerErrorPage } from '../global-components/errors/ServerErrorPage';
import { SoftwareErrorPage } from '../global-components/errors/SoftwareErrorPage';
import RoutePath from './RoutePath';

import Cart from '../pages/components/Cart.jsx';


const AppRouter = () => {
  return useRoutes([
    {
      path: RoutePath.HOME_ROUTE,
      element: <Navigate to="/hello-word" />,
    },
    {
      path: '/hello-word',
      element: (
          <>
            <h2>Hello World</h2>
          </>
      ),
    },
    {
      path: RoutePath.CART_ROUTE,
      element: <Cart />,
    },
    {
      path: RoutePath.ERR_403_ROUTE,
      element: <AccessDeniedPage />,
    },
    {
      path: RoutePath.ERR_404_ROUTE,
      element: <NotFoundPage />,
    },
    {
      path: RoutePath.ERR_500_ROUTE,
      element: <ServerErrorPage />,
    },
    {
      path: RoutePath.ERR_NETWORK_ROUTE,
      element: <NetworkErrorPage />,
    },
    {
      path: RoutePath.ERR_INVALID_DATA_ROUTE,
      element: <InvalidDataErrorPage />,
    },
    {
      path: RoutePath.ERR_SOFTWARE_ROUTE,
      element: <SoftwareErrorPage />,
    },
  ]);
};

export default AppRouter;
