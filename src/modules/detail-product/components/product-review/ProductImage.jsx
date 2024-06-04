import PropTypes from 'prop-types';
import '../../styles/ProductImage.css';
const ProductImage = ({ productData }) => {
  if (!productData) {
    return null; 
  }

  return (
    <div className="product-image">
      <img src={productData} alt="" ></img>
    </div>
  );
};

ProductImage.propTypes = {
  productData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductImage;