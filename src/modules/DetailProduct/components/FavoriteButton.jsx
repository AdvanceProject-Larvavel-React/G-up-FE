
import '../styles/FavoriteButton.css';
import heartEmoji from '../../../assets/images/love-03.jpg';
const FavoriteButton = () => {
  return (
    <button className="favorite-button">
      <div className="favorite-button-heart">
        <img className="favorite-button-image" src={heartEmoji} alt="Heart Icon" />
      </div>
      <div className="favorite-button-text">Favorite</div>
    </button>
  );
};

export default FavoriteButton;