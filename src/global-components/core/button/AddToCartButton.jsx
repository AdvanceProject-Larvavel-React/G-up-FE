import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

const AddToCartButton = ({ idProd, quantity, price }) => {
  console.log(price);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [IdUser, setUserID] = useState(null);
  console.log(error, IdUser);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.data;
        setUserID(userData.id);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);
  const handle = async () => {
    const userId = IdUser;
    const payload = {
      items: [
        {
          product_id: idProd,
          quantity: quantity
        }
      ],
      total: quantity*price,
      user_id: userId,
      id:userId,
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