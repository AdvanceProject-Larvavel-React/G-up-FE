import { Col, Form, Row, Select, Spin } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../../../../redux/features/auth/authSlice";
import Button from "../buttons/Buttons";
import Input from "../inputs/Input";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    phone: "",
    role_id: 1,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleRoleChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      role_id: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };
  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <WelcomeText>
          Welcome To G-up <br /> <center>Register</center>
        </WelcomeText>
        <InputContainer>
          <Row gutter={[16, 16]}>
            <Col span={2} />
            <Col span={11}>
              <Input
                type="text"
                placeholder={
                  !error?.errors?.name ? "Name" : error?.errors?.name
                }
                name="name"
                value={formData.name}
                onChange={handleChange}
                color={!error?.errors?.name ? "" : "red"}
              />
            </Col>
            <Col span={11}>
              <Input
                type="text"
                placeholder={
                  !error?.errors?.address ? "Address" : error?.errors?.address
                }
                name="address"
                value={formData.address}
                onChange={handleChange}
                color={!error?.errors?.address ? "" : "red"}
              />
            </Col>
          </Row>
          <Input
            type="email"
            placeholder={!error?.errors?.email ? "Email" : error?.errors?.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            color={!error?.errors?.email ? "" : "red"}
          />
          <Input
            type="password"
            placeholder={
              !error?.errors?.password ? "Password" : error?.errors?.password
            }
            name="password"
            value={formData.password}
            onChange={handleChange}
            color={!error?.errors?.password ? "" : "red"}
          />
          <Input
            type="phone"
            placeholder={!error?.errors?.phone ? "Phone" : error?.errors?.phone}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            color={!error?.errors?.phone ? "" : "red"}
          />
          <Form.Item label="Role" style={{ color: 'white' }}>
            <Select defaultValue={1} onChange={handleRoleChange}>
              <Select.Option value={1}>Customer</Select.Option>
              <Select.Option value={2}>Store Owner</Select.Option>
            </Select>
          </Form.Item>
        </InputContainer>
        <ButtonContainer>
          <Button content="Register" type="submit" />
        </ButtonContainer>
        <StyledLink to="/auth">OR LOGIN</StyledLink>
        {status === "loading" && <Spin />}
      </form>
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 50vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  p {
    font-size: 1rem;
  }
`;
const WelcomeText = styled.h3`
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
`;
const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  width: 100%;
`;
const StyledLink = styled(Link)`
  display: block;
  margin: 1rem 0 2rem 0;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  &:hover {
    text-decoration: unset;
    color: #32c8ff;
  }
`;
export default RegisterForm;