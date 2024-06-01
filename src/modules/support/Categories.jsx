
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/support.css'; 

const Categories = ({ data: { id, image, title } }) => {
  return (
    <div className="category">
      <Link to={`${id}`} className="category-link">
        <img src={image} alt={title} className="round-img" />
        <h3 className="category-title">{title}</h3>
      </Link>
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Categories;
