import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Button, Col, Drawer, Row } from "antd";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthLink from "./buttons/AuthLink";
import DeliverTo from "./buttons/DeliverTo";
import { NavLink } from "./buttons/NavLink";
import Search from "./inputs/Search";
import { OptionLink } from "./selects/OptionLink";
const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 875);
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 875);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onClose = () => {
    setDrawerVisible(false);
  };
  const servicesOption = [
    { value: "register", label: "Register", link: "/auth/register" },
    { value: "become store", label: "Owner", link: "/auth/register" },
  ];
  const token = localStorage.getItem("token");
  const checkAuth = token ? true : false;
  return (
    <>
      <header className="header" style={styles.header}>
        <Row>
          <Col span={1} />
          {!isMobile && (
            <Col sm={8} md={8} lg={8} xl={8} style={{ marginTop: "30px" }}>
              <NavLink link="/home" text="Home" />
              <NavLink link="/checkout" text="Cart" />
              <NavLink link="/category" text="Category" />
              <NavLink link="/list-store" text="Store" />
              <NavLink link="#" text="Community" />
              <NavLink link="#" text="Gifts" />
            </Col>
          )}
          <Col span={6}>
            <div className="logo-container" style={styles.logoContainer}>
              <img
                src="https://res.cloudinary.com/dvgiuwfuv/image/upload/v1717243048/G-UP-Project/Orange_E-commerce_Online_Store_Logo_1_1_shq7ml.png"
                alt="Grown-Up"
                className="logo"
                style={styles.logo}
              />
            </div>
          </Col>
          {!isMobile && (
            <Col
              sm={8}
              md={8}
              lg={8}
              xl={8}
              style={{ textAlign: "right", alignContent: "center" }}
            >
              <Badge count={1} style={{ marginRight: "15px" }}>
                <a href="#">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ width: "20px", fontSize: "20px" }}
                  />
                </a>
              </Badge>
              <NavLink link="#" text="Notification" />
              <NavLink link="/support" text="Support" />
              <NavLink link="/contact" text="Contact" />
              <OptionLink options={servicesOption} />
              <AuthLink isLoggedIn={checkAuth} />
            </Col>
          )}
          <Col span={1} />
          <Col span={12} />
          <Col
            xs={4}
            sm={0}
            md={0}
            lg={0}
            xl={0}
            span={24}
            style={{ marginTop: "50px" }}
          >
            <Button
              type="text"
              onClick={showDrawer}
              icon={
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ fontSize: "24px", color: "white" }}
                />
              }
            />
          </Col>
        </Row>
        {!isMobile && (
          <Row>
            <Col span={4}></Col>
            <Col span={4}>
              <DeliverTo />
            </Col>
            <Col span={10} style={{ alignContent: "center" }}>
              <Search />
            </Col>
            <Col span={6}>
              <Link to={"/checkout"}
               style={{
                textDecoration: "none",
                color: "yellow",
                marginLeft: "30px",
                fontSize: "30px",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#ffc107")} 
              onMouseOut={(e) => (e.target.style.color = "yellow")} 
              >
                <FaShoppingCart />
              </Link>
            </Col>
          </Row>
        )}
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={drawerVisible}
          style={{ backgroundColor: "#5c0011", color: "white" }}
        >
          <div
            style={{
              display: "grid",
              gridColumn: "2",
              gap: "1",
              alignContent: "center",
            }}
          >
            <NavLink link="/home" text="Home" />
            <NavLink link="/checkout" text="Store" />
            <NavLink link="/category" text="Category" />
            <NavLink link="/list-store" text="Store" />
            <NavLink link="#" text="Community" />
            <NavLink link="#" text="Gifts" />
            <NavLink link="#" text="Notification" />
            <NavLink link="/support" text="Support" />
            <NavLink link="/contact" text="Contact" />
            <center
              style={{ borderBottom: "1px solid white", padding: "20px" }}
            >
              <AuthLink isLoggedIn={checkAuth} />
            </center>
          </div>
        </Drawer>
        {isMobile && (
          <Row xs={4} sm={0} md={0} lg={0} xl={0}>
            <Col span={6}></Col>
            <Col span={12}>
              <Search />
            </Col>
            <Col span={6}></Col>
          </Row>
        )}
      </header>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: "#B11212",
    height: "170px",
    color: "white",
    "@media (max-width: 875px)": {
      height: "50px",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
  },
};
export default Header;
