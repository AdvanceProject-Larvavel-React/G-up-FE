import { Input } from 'antd';
import axios from 'axios';
import styled from 'styled-components';

const SearchContainer = styled.div`
    max-width: 90%;
    width: 100%;
    height: 50px; /* Increase the height as needed */
    padding: 10px;
`;

export const Search = () => {
    const { Search } = Input;

    const onSearch = async (value) => {
        try {
            const response = await axios.post(`http://localhost:8000/api/user-service/post/search?value=${value}`, { value });
            const datas = response.data.data;
            datas.map(item => {
                console.log(item);
            });
        } catch (error) {
            console.error("Error during search request:", error);
        }
    };

    return (
        <SearchContainer>
            <Search
                placeholder="Search Product, Category, Store..."
                allowClear
                onSearch={onSearch}
                style={{ height: '100%' }} // Make the input fill the container height
            />
        </SearchContainer>
    );
};
