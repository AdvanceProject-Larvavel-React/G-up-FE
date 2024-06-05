import { Button, Dropdown, Menu, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import styled from "styled-components";

const AuthLink = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };
    const menu = (
        <Menu>
            <Menu.Item key="profile">
                <Link to="/profile">Xem Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    const StyledButton = styled(Button)`
        background-color: transparent;
        border-color: white;
        color: white;
        &:hover {
            background-color: white;
            color: black;
            border-color: white;
        }
    `;

    return (
        <>
            {isLoggedIn ? (
                <Dropdown overlay={menu} placement="bottomRight">
                    <Avatar icon={<UserOutlined />} style={{ backgroundColor: "white", color: "black", cursor: "pointer" }} />
                </Dropdown>
            ) : (
                <Link to="/auth/login">
                    <StyledButton type="link">Login</StyledButton>
                </Link>
            )}
        </>
    );
};

export default AuthLink;