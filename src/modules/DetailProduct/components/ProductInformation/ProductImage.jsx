import PropTypes from 'prop-types';

const ProductImage = ({ productData }) => {
  if (!productData) {
    return null; 
  }
  const { imageUrl } = productData;

  return (
    <div className="product-image">
      <img src={imageUrl} alt="Product image" />
    </div>
  );
};

ProductImage.propTypes = {
  productData: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductImage;