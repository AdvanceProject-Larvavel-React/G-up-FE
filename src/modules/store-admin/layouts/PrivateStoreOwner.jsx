import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import ShopOwnerLayout from "./ShopOwnerLayout";

const PrivateStoreOwner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <ShopOwnerLayout/>
    </div>
  );
};

export default PrivateStoreOwner;