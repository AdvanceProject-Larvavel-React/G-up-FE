
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import '../../../assets/styles/FavoriteButton.css';

const FavoriteButton = () => {
  return (
    <Button type="primary" icon={<FontAwesomeIcon icon={faHeart} />} style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', margin: '0 8px' }}>
      Favorite
    </Button>
  );
};

export default FavoriteButton;
