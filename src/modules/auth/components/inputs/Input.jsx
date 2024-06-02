import styled from "styled-components";
export default function Input({ type, placeholder, name,color }) {
  return <StyledInput type={type} placeholder={placeholder} name={name} color={color}/>;
}

const StyledInput = styled.input`
  background: rgba(209, 125, 125, 0.437);
  box-shadow: 0 8px 32px 0 ${({ color }) => color || 'rgba(31, 38, 135, 0.37)'};
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &:hover {
    box-shadow: 0 0 0 0.2rem #b9abe0;
  }
  &::placeholder {
    color: #ffffff;
    font-weight: 100;
    font-size: 1rem;
  }
`;