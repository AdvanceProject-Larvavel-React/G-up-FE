import { useState } from 'react';
 import { createProduct} from '../apis/ProductAPIs';

const CreateProduct = () => {
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        price: '',
        quantity: '',
        file_paths: null,
        category_id: '',
        store_id: ''
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setProductData(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setProductData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in productData) {
            formData.append(key, productData[key]);
        }
        try {
            const response = await createProduct(formData);
            setSuccessMessage(response.message);
            setError(null);
        } catch (err) {
            setError(err.message);
            setSuccessMessage(null);
        }
    };

    return (
        <div>
            <h1>Create New Product</h1>
            {error && <div>Error: {error}</div>}
            {successMessage && <div>{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={productData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={productData.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={productData.price}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={productData.quantity}
                    onChange={handleChange}
                    required
                />
                <input
                    type="file"
                    name="file_paths"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="category_id"
                    placeholder="Category ID"
                    value={productData.category_id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="store_id"
                    placeholder="Store ID"
                    value={productData.store_id}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
