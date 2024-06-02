import { Popconfirm, Spin } from "antd";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../../../../redux/features/auth/authSlice";
import Button from "../buttons/Buttons";
import Icon from "../icons/Icons";
import Input from "../inputs/Input";
const LoginForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    dispatch(loginUser({ email, password }));
  };
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  const emailError = error?.errors?.email;
  const passwordError = error?.errors?.password;
  const errorMessage = error?.status === false;
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 0);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MainContainer>
          <WelcomeText>Welcome To G-up</WelcomeText>
          <p>{errorMessage ? "Please! Try check again" : ""}</p>
          <InputContainer>
            <Input
              type="email"
              placeholder={!emailError ? "Email" : emailError}
              name="email"
              color={!emailError ? "" : "red"}
            />
            <Input
              type="password"
              placeholder={!passwordError ? "Password" : passwordError}
              name="password"
              color={!passwordError ? "" : "red"}
            />
          </InputContainer>
          <ButtonContainer>
            <Button content="Sign Up" type="submit" />
          </ButtonContainer>
          <StyledLink to="register">OR REGISTER NEW ACCOUNT</StyledLink>
          {status === "loading" && <Spin />}
          <HorizontalRule />
          <IconsContainer>
            <Icon color={FacebookBackground}>
              <FaFacebookF />
            </Icon>
            <Icon color={InstagramBackground}>
              <FaInstagram />
            </Icon>
            <Icon color={TwitterBackground}>
              <FaTwitter />
            </Icon>
          </IconsContainer>
          <Popconfirm
            title="Feature Not Available"
            description="We are currently updating this feature. Please check back later."
            open={open}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel}
          >
            <ForgotPassword onClick={showPopconfirm}>
              Forgot Password ?
            </ForgotPassword>
          </Popconfirm>
          <StyledLink to="/">
            <h2 type="left">Go to home</h2>
          </StyledLink>
        </MainContainer>
      </form>
    </>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;
const StyledLink = styled(Link)`
  margin: 1rem 0 2rem 0;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  cursor: pointer;
  &:hover {
    text-decoration: unset;
    color: #32c8ff;
  }
`;
const WelcomeText = styled.h3`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;
export default LoginForm;