import { Dropdown, Input, Menu } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../assets/styles/SearchCom.css";
import styled from "styled-components";

const Search = () => {
  const { Search } = Input;
  const [results, setResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const onSearch = async (value) => {
    if (!value) {
      setResults([]);
      setVisible(false);
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/user-service/post/search?value=${value}`,
        { value }
      );
      const datas = response.data.data;
      setResults(datas);
      setVisible(true);
    } catch (error) {
      console.error("Error during search request:", error);
    }
  };
  const menu = (
    <StyledMenu>
      {results.map((item) => (
        <Menu.Item key={item.id} onClick={() => handleItemClick(item.id)}>
          {item.name}
        </Menu.Item>
      ))}
    </StyledMenu>
  );
  const handleItemClick = (id) => {
    setVisible(false);
    navigate(`/product/${id}`);
  };
  return (
    <div>
      <Dropdown
        overlay={menu}
        visible={visible}
        onVisibleChange={setVisible}
        overlayClassName="search-dropdown"
      >
        <Search
          placeholder="Search Product, Category, Store..."
          allowClear
          onSearch={onSearch}
        />
      </Dropdown>
    </div>
  );
};
const StyledMenu = styled(Menu)`
  max-height: 300px;
  overflow-y: auto;
`;
export default Search;