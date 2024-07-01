import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";
import CategoryData from "../__mock__/CategoryData";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setSearchPerformed(true);
      return;
    }
    const results = CategoryData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descriptions.some((description) =>
          description.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setSearchResults(results);
    setSearchPerformed(true);
  };

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="What are you looking for?"
          />
          <IconWrapper>
            <SearchButton type="submit">
              <FaSearch />
            </SearchButton>
          </IconWrapper>
        </SearchContainer>
      </form>
      <SearchResults>
        {searchPerformed && searchResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          searchResults.map((result) => (
            <StyledLink to={`index/${result.id}`} key={result.id}>
              <SearchResultButton
                className={activeButton === result.id ? "active" : ""}
                onClick={() => handleButtonClick(result.id)}
              >
                {result.title}
              </SearchResultButton>
            </StyledLink>
          ))
        )}
      </SearchResults>
    </div>
  );
};


// Styled-components
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const IconWrapper = styled.div`
  margin-left: -40px;
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchResults = styled.div`
  margin: 20px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SearchResultButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  &.active {
    background-color: #ccc;
  }
`;
export default Search;