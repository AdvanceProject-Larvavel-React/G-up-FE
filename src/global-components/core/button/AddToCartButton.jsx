import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useEffect } from 'react';
const AddToCartButton = ({idProd}) => {
  console.log(idProd);
  console.log(localStorage.getItem('userId'));
  const handle = () => {
    dispatch(logout());
  };
  return (
    <Button onClick={handle} type="primary" icon={<FontAwesomeIcon icon={faShoppingCart} />} style={{ backgroundColor: '#28a745', borderColor: '#28a745', margin: '0 8px' }}>
      Add to Cart
    </Button>
  );
};
export default AddToCartButton;
