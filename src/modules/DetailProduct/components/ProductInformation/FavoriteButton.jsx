import '../styles/FavoriteButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteButton = () => {
  return (
    <button className="favorite-button">
      <div className="favorite-button-heart">
        <FontAwesomeIcon icon={faHeart} className="favorite-button-icon" style={{ color: 'red' }} />
      </div>
      <div className="favorite-button-text">Favorite</div>
    </button>
  );
};

export default FavoriteButton;
