import "../../../assets/styles/CardShop.css";
import { useNavigate } from "react-router-dom";
const   CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const handleButtonClick = (name) => {
     navigate(`category/${category.id}?query=${name}`); 
  };

  return (
    <div className="card">
      <p className="text-title">{category.name}</p>
      <div
        className="card-img"
        style={{ backgroundImage: `url(${category.file_paths})` }}
      ></div>
      {category.additionalInfo && (
        <p>Additional Info: {category.additionalInfo}</p>
      )}
      <button
        onClick={() => handleButtonClick(category.name)}
        className="see-more-link"
      >
        See More
      </button>
    </div>
  );
};

export default CategoryCard;
