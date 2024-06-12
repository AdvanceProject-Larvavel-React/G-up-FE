import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import styled from "styled-components";

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(255, 65, 65);

  &:hover {
    border-radius: 40px;
    transition-duration: 0.3s;
    box-shadow: 0 0 200px 15px yellow;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const PlusSign = styled.div`
  width: 100%;
  transition-duration: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 17px;
  }

  svg path {
    fill: white;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: 0.3s;
`;

const Logout = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    history("/auth");
  };

  return (
    <LogoutButton className="Btn" onClick={handleLogout}>
      <PlusSign className="sign">
        <svg viewBox="0 0 512 512">
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
        </svg>
      </PlusSign>
      <Text className="text">Logout</Text>
    </LogoutButton>
  );
};

export default Logout;