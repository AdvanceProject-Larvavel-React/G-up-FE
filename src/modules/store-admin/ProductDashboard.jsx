import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductApi from './apis/ProductAPIs';

import { Button, Card, List } from 'antd';

const { Meta } = Card;

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductApi.getAllProducts();
                setProducts(data.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchProducts();
    }, []);

    const handleDisableProduct = async (id) => {
        try {
            await ProductApi.disableProduct(id);
            // Refresh products after disabling
            const newData = await ProductApi.getAllProducts();
            setProducts(newData.data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await ProductApi.destroyProduct(id);
            // Refresh products after deleting
            const newData = await ProductApi.getAllProducts();
            setProducts(newData.data);
        } catch (err) {
            setError(err.message);
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="product-dashboard">
            <h1>Product Dashboard haha</h1>
            <Link to="/create-product">
                <Button type="primary" className="btn-create">Create Product</Button>
            </Link>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={products}

            />
        </div>
    );
};

export default ProductDashboard;
