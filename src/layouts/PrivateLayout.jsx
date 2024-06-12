import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LayoutDashboard from '../modules/super-admin/layouts/LayoutDashboard';


const PrivateLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  return (
    <div>
      <LayoutDashboard/>
    </div>
  );
};

export default PrivateLayout;