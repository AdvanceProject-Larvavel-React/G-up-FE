
import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-box">
       
        <input type="text" className="search-input" placeholder="Search..." />
        <input type="button" value="Search" className="search-button" />
      </div>
    </div>
  );
}

export default Search;
