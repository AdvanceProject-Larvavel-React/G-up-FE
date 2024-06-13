import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, message } from 'antd';
import { Card } from '../../global-components/core/CardProd/Card';


const Store = () => {
  const [products, setProducts] = useState([]);
  const [storeID, setStoreID] = useState(null);
  const [storeInfo, setStoreInfo] = useState({});
  const token = localStorage.getItem('token');
  // Fetch the store profile data
  const fetchProfileData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const storeData = response.data.data.store;
      setStoreInfo(storeData)
      setStoreID(storeData.id);    
    } catch (error) {
      console.error("Error fetching profile data:", error);
      message.error('Error fetching profile data');
    }
  };

  // Fetch active products data
  const fetchProductsData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/product/get/active");
      const product = response.data.data;
      setProducts(product);
    } catch (error) {
      console.error("Error fetching products data:", error);
      message.error('Error fetching products data');
    }
  };

  useEffect(() => {
    fetchProfileData();
    fetchProductsData();
  }, []);

  // Filter products by store ID
  const filteredProducts = products.filter(product => product.store_id === storeID);
  const filterdBestSellProds =  products.filter(product => product.sold >=100);
  console.log("THông tin sản phẩm ban ra nhiều hơn 100",filterdBestSellProds);
  console.log("Thông tin của store: ",storeInfo);
  console.log("Thông tin của Sản phẩm của store đó: ",filteredProducts);
  
  return (
    <div>
      {/* <h1>Active Products</h1>
      <h1>Dữ liêu của shop</h1> */}
      <p>Shop nane: {storeInfo.name}</p>
      {
        filteredProducts.map(product => (
          <div key={product.id}>
            <h2>CAtegory cảu product {product.name}</h2>
            <p>ID: {product.category.id}</p>
            <p>Name: {product.category.name}</p>
            {console.log(`Category của sản phẩm ${product.id}: `, product.category)}
          </div>
        ))
      }
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredProducts}
        renderItem={item => (
          <Card  key={item.id} data={item} />
        )}
      />
    </div>
  );
};

export default Store;
