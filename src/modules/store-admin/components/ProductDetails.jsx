import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductApi from './ProductApi';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await ProductApi.getProductById(id);
                setProduct(data.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProduct();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default ProductDetails;
