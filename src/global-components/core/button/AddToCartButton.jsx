import  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

const AddToCartButton = ({ idProd }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    setUserId(storedUserId);
  }, []);

  const handleAddToCart = () => {
    if (userId && idProd) {
      console.log(`Adding product ${idProd} to cart for user ${userId}`);
    } else {
      console.error('User ID or Product ID is missing');
    }
  };
  return (
    <Button
      type="primary"
      icon={<FontAwesomeIcon icon={faShoppingCart} />}
      style={{ backgroundColor: '#28a745', borderColor: '#28a745', margin: '0 8px' }}
      onClick={handleAddToCart}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;
