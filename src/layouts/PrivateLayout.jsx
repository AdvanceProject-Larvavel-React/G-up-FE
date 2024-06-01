import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PrivateLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (location.pathname.includes("/dashboard")) {
    return (
      <div>
        <a>Dashboard Layout</a>
        <Outlet />
      </div>
    );
  } 

  return (
    <div>
      Private Layout Default
      <Outlet />
    </div>
  );
};

export default PrivateLayout;