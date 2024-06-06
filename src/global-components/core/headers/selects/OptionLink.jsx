import { Select } from "antd"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StyleSelect = styled(Select)`
  background: transparent;
  color: white;
  border: none !important;
  box-shadow: none !important;
  margin-right:10px;  
  margin-left:10px;
  .ant-select-selector {
    background: transparent !important;
    color: white;
  }

  .ant-select-arrow {
    color: white;
  }

  .ant-select-selection-item {
    color: white !important;
  }

  &:hover .ant-select-selector {
    border-color: white !important;
  }

  &:hover .ant-select-selection-item {
    color: white !important;
  }
`;
export const OptionLink = ({ options }) => {
  // const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const handleChange = (value) => {
    const selectedOption = options.find(option => option.value == value);
    console.log(selectedOption.value);
    navigate(selectedOption.link)
  };
  return (
    <>
      <StyleSelect
        defaultValue={options}
        options={options}
        onChange={handleChange}
      />
    </>
  )
}
