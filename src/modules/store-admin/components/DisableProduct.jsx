import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from '../api/ProductApi';

const DisableProduct = () => {
    const { id } = useParams();
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleDisable = async () => {
        try {
            const response = await ProductApi.disableProduct(id);
            setMessage(response.state);
            setError(null);
        } catch (err) {
            setError(err.message);
            setMessage(null);
        }
    };

    return (
        <div>
            <h1>Disable Product</h1>
            {error && <div>Error: {error}</div>}
            {message && <div>{message}</div>}
            <button onClick={handleDisable}>Disable Product</button>
        </div>
    );
};

export default DisableProduct;
