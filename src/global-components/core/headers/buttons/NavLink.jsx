import { Button } from 'antd';
import styled from 'styled-components';
const StyledButton = styled(Button)`
    color: white;
    text-decoration: none;
    &:hover {
        border: 1px solid white;
        color: red;
        text-decoration: none;
    }
`;
export const NavLink = ({ link, text }) => {
    return (
        <StyledButton type="text" className="link-button">
            <a href={link} style={{ color: "white" }}>{text}</a>
        </StyledButton>
    );
};