import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Từ khóa tìm kiếm:', searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="what are you looking for?"
            className="search-input"
          />
          <div className='icon1'>
          <button type="submit" className="search-button">
            <FaSearch />
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;