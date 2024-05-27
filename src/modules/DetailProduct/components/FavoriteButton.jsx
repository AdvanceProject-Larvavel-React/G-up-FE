
import '../styles/FavoriteButton.css';
import heartIcon from '../../../assets/heart.png';

const FavoriteButton = () => {
  return (
    <button className="favorite-button">
      <div className="favorite-button-heart">
        <img src={heartIcon} alt="Heart Icon" />
      </div>
      <div className="favorite-button-text">Favorite</div>
    </button>
  );
};

export default FavoriteButton;