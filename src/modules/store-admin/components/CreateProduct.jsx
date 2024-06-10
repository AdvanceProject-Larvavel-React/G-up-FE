import { useEffect, useState } from "react";
import { createProduct, getAllCategory } from "../apis/ProductAPIs";
import { Select, Space } from "antd";

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    file_paths: null,
    category_id: "",
    store_id: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [listCategory, setListCategory] = useState([]);

  const handleChangeSelect = (value) => {
    setProductData((prev) => {
      return {
        ...prev,
        category_id: value,
      };
    });
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllCategory();

        //   convert dataCategory sang value với label của antd
        const dataSelected = data.data.data.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        });

        setListCategory(dataSelected);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
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
    
      {productData.category_id ? (
        <form onSubmit={handleSubmit} className="mt-5">
          <div>
            <label htmlFor="name">Name *</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={productData.name}
              onChange={handleChange}
              required
              className="w-50"
            />
          </div>
          <div>
            <label htmlFor="description">Description *</label>
            <br />
            <input
            type="text"
            name="description"
            placeholder="Description"
            value={productData.description}
            onChange={handleChange}
            required
             className="w-50"
          />
          </div>
          <div>
            <label htmlFor="price">Price *</label>
            <br />
            <input
            type="number"
            name="price"
            placeholder="Price"
            value={productData.price}
            onChange={handleChange}
            required
           className="w-50"
          />
          </div>
          <div>
            <label htmlFor="quantity">Quantity *</label>
            <br />
            <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={productData.quantity}
            onChange={handleChange}
            required
          />
          </div>
          <div>
            <label htmlFor="file_paths">Choose File *</label>
            <br />
            <input
            type="file"
            name="file_paths"
            onChange={handleChange}
            required
          
          />
          </div>
        
        <div>
        <Space wrap>
        <Select
          placeholder="Plaese select Category"
          style={{
            width: 800,
          }}
          onChange={handleChangeSelect}
          options={listCategory}
          required={true}
        />
      </Space>
        </div>
    
{/*      
          <input
            type="number"
            name="category_id"
            placeholder="Category ID"
            value={productData.category_id}
            onChange={handleChange}
            required
          /> */}
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreateProduct;
