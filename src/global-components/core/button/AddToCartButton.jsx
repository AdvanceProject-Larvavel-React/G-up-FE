
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

const AddToCartButton = ({idProd}) => {
  console.log(idProd);
  return (
    <Button type="primary" icon={<FontAwesomeIcon icon={faShoppingCart} />} style={{ backgroundColor: '#28a745', borderColor: '#28a745', margin: '0 8px' }}>
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;