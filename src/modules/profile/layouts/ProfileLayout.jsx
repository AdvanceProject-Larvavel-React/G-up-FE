
import Header from "../../../global-components/core/headers/Header";
import Footer from "../../../global-components/core/footers/Footer";
import SideBar from "../../../global-components/core/side-bars/SideBar";
import styles from "./profileLayout.module.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Spin } from "antd";
const ProfileLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/auth');
    } else {
      setLoading(false); 
    }
  }, [navigate]);

  if (loading) {
    return <Spin/>;
  }
  return (
    <>
      <div>
        <Header />
        <div className={`${styles["container"]}`}>
          <SideBar className={`${styles["sidebar"]}`} />
          <div className={`${styles["child"]}`}>
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default ProfileLayout;