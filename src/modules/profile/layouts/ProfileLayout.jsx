import { Spin } from "antd";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../../global-components/core/side-bars/SideBar";
import styles from "./profileLayout.module.css";
const ProfileLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  if (loading) {
    return <Spin />;
  }
  return (
    <>
      <div>
        <div className={`${styles["container"]}`}>
          <SideBar className={`${styles["sidebar"]}`} />
          <div className={`${styles["child"]}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileLayout;
