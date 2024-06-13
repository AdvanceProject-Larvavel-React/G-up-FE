import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useState } from 'react';
import axios from 'axios';

const AddToCartButton = ({ idProd, quantity, price }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    const userId = localStorage.getItem('userId');
    const payload = {
      items: [
        {
          product_id: idProd,
          quantity: quantity
        }
      ],
      total: quantity*price,
      user_id: userId
    };

    try {
      setLoading(true);
      const res = await axios.post('http://localhost:8000/api/cart/post/create', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Cart created successfully:', res.data);
    } catch (error) {
      console.error('Error creating cart:', error);
      setError('Error creating cart');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handle}
      type="primary"
      icon={<FontAwesomeIcon icon={faShoppingCart} />}
      style={{ backgroundColor: '#28a745', borderColor: '#28a745', margin: '0 8px' }}
      loading={loading}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;