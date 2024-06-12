import { Input } from "antd";
import axios from "axios";
import "../../../../assets/styles/SearchCom.css"


const Search = () => {
  const { Search } = Input;
  const onSearch = async (value) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/user-service/post/search?value=${value}`,
        { value }
      );
      const datas = response.data.data;
      datas.map((item) => {
        console.log(item);
      });
    } catch (error) {
      console.error("Error during search request:", error);
    }
  };
  return (
    <div >
      <Search
        placeholder="Search Product, Category, Store..."
        allowClear
        onSearch={onSearch}
      />
    </div>
  );
};

export default Search;
