import "./Search.css"
import { Input, Space } from 'antd';
import axios from "axios";
// import axios from "axios";
const { Search } = Input;
const SearchBar = () => {
  const onSearch = (data) => { 
    searchData(data);
  };
  const searchData = async (data) => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/search", {data});
      console.log(res);
    } catch (error) {
      console.log("Search Failed",error);
    }
  }
    return (
      <>
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 200,
            }}
            className="search"
            />
        </Space>
      </>
  )
}
export default SearchBar;