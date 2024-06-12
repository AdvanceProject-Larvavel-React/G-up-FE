import {
  DashboardOutlined,
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Layout,
  Menu,
  Switch,
  theme as antdTheme,
} from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo-gup.png";
import Logout from "../../../global-components/core/button/Logout";
const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

const items2 = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    children: [{ key: "dashboard", label: "Home" }],
  },
  {
    key: "manage-user",
    icon: <UserOutlined />,
    label: "Manage User",
    children: [
      { key: "list-user", label: "All Users" },
      { key: "list-disable-user", label: "List User Disabled" },
    ],
  },
  {
    key: "manage-store",
    icon: <LaptopOutlined />,
    label: "Manage Store",
    children: [
      { key: "list-store", label: "All Stores" },
      { key: "list-disable-store", label: "List Store Disabled" },
    ],
  },
  {
    key: "manage-category",
    icon: <ShoppingCartOutlined />,
    label: "Manage Category",
    children: [
      { key: "list-category", label: "All Category" },
      { key: "list-disable-category", label: "List Category Disabled" },
    ],
  },
  {
    key: "setting",
    icon: <SettingOutlined />,
    label: "Settings",
    children: [
      { key: "theme-options", label: "Color Theme" },
      { key: "language", label: "Languages",},
    ],
  },
];

const LayoutDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const handleMenuItemClick = (key) => {
    navigate(`/${key}`);
  };
  const handleThemeChange = (checked) => {
    setDarkMode(checked);
  };

  const theme = {
    token: darkMode
      ? antdTheme.darkAlgorithm.token
      : antdTheme.defaultAlgorithm.token,
    algorithm: darkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: darkMode ? "#001529" : "#fff",
            color: darkMode ? "#fff" : "#000",
            padding: "0 16px",
          }}
        >
          <div className="demo-logo" style={{ flex: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 65 }} />
          </div>
          <Switch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            checked={darkMode}
            onChange={handleThemeChange}
            style={{ flex: 0 , marginRight:"30px"}}
          />
          <Logout/>
          <div
             style={{ flex: 0 , marginRight:"30px"}}
          ></div>
        </Header>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            width={200}
            style={{
              background: darkMode ? "#001529" : "#fff",
            }}
            trigger={null}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["dashboard"]}
              defaultOpenKeys={["dashboard", "manage-user", "manage-store"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              theme={darkMode ? "dark" : "light"}
            >
              {items2.map((item) => (
                <SubMenu
                  key={item.key}
                  title={
                    <span>
                      {item.icon}
                      <span>{item.label}</span>
                    </span>
                  }
                >
                  {item.children.map((child) => (
                    <Item
                      key={child.key}
                      onClick={() => handleMenuItemClick(child.key)}
                    >
                      {child.label}
                    </Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </Sider>
          <Layout
            style={{
              flex: 0.1,
              background: darkMode ? "#001529" : "#fff",
            }}
          >
            <Button
              onClick={toggleSidebar}
              style={{
                background: darkMode ? "#001529" : "#fff",
                maxWidth: "40px",
                alignSelf: "center",
              }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Layout>
          <Layout
            style={
              {
                background: darkMode ? "#001529" : "#fff",
              }
            }
          >
            <div
              style={{
                boxShadow: darkMode
                  ? "0px 2px 4px rgba(255, 255, 255, 0.641)"
                  : "0px 2px 4px rgba(0, 0, 0, 0.229)",
                height: "700px",
                width:"98%",
                overflowY: "auto",
                background: darkMode ? "#001529" : "#fff",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              <div
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                  background: darkMode ? "#001529" : "#fff",
                  color: darkMode ? "#fff" : "#000",
                  borderRadius: "8px",
                }}
              >
                <Content
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    background: darkMode ? "#001529" : "#fff",
                    color: darkMode ? "#fff" : "#000",
                    borderRadius: "8px",
                  }}
                >
                  <Outlet />
                </Content>
              </div>
            </div>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default LayoutDashboard;