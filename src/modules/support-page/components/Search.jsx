import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Search.css";
import CategoryData from "../__mock__/CategoryData";
import { Link } from "react-router-dom";
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
        <div className="search-container">
          <div className="input1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What are you looking for?"
              className="search-input"
            ></input>
          </div>

          <div className="icon1">
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>
      <div className="search-results">
        {searchPerformed && searchResults.length === 0 ? (
          <p>No results found</p>
        ) : (
          searchResults.map((result) => (
            <Link
              to={`index/${result.id}`}
              key={result.id}
              className="search-result-item"
            >
              <button
                className={`search-result-button ${
                  activeButton === result.id ? "active" : ""
                }`}
                onClick={() => handleButtonClick(result.id)}
              >
                {result.title}
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
export default Search;