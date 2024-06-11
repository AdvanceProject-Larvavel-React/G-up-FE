import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { List, message } from 'antd';
import Footer from "../../global-components/core/footers/Footer";
import Header from "../../global-components/core/headers/Header";
import FollowButton from "../../global-components/core/button/FollowButton";
import HermesShop from "./components/HermesShop";
import NavigationBar from "./components/NavigationBar";
import ProductCard from "./components/ProductCard";



const Store = () => {
    const [products, setProducts] = useState([]);
    const [storeID, setStoreID] = useState(null);
    const [storeInfo, setStoreInfo] = useState({});
    const fetchStoreData = async () => {
        try {
            const storeResponse = await axios.get(`http://localhost:8000/api/store/get/by-id/1`);
            console.log(storeResponse);
            const storeData = storeResponse.data.data;
            setStoreInfo(storeData);
            setStoreID(storeData.id);
        } catch (error) {
            console.error("Error fetching store data:", error);
            message.error('Error fetching store data');
        }
    };

    // Fetch active products data
    const fetchProductsData = async () => {
        try {
            const productResponse = await axios.get("http://localhost:8000/api/product/get/active");
            const productsData = productResponse.data.data;
            setProducts(productsData);

        } catch (error) {
            console.error("Error fetching products data:", error);
            message.error('Error fetching products data');
        }
    };

    useEffect(() => {
        fetchStoreData();
        fetchProductsData();
    }, []);

    // Filter products by store ID
    const filteredProducts = products.filter(product => product.store_id === storeID);
    const filterdBestSellProds = products.filter(product => product.sold >= 100);
    console.log("THông tin sản phẩm ban ra nhiều hơn 100", filterdBestSellProds);
    console.log("Thông tin của store: ", storeInfo);
    console.log("Thông tin của Sản phẩm của store đó: ", filteredProducts);

    return (
        <div className="checkout-page">
        
                <Row>
                    <Col span={24}> <Header /></Col>
                </Row>
                <main>
                <Row>
                    <Col span={16}><HermesShop /></Col>
                    <Col span={3} offset={3}>
                        <FollowButton />
                    </Col>
                   </Row>
                   <Row>
                    <Col span={24}> <NavigationBar /></Col>
                   </Row>
                   <Row>
                    <Col span={24}> <ProductCard /></Col>
                   </Row>
                </main>
                <Row>
                    <Col span={24}> <Footer /></Col>
                </Row>
        
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
                    item
                )}
            />
        </div>
    );
};

export default Store;