import { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, message } from 'antd';
import "../store/styles/Store.css";
import Footer from "../../global-components/core/footers/Footer";
import Header from "../../global-components/core/headers/Header";
import HermesShop from "./components/HermesShop";
import NavigationBar from "./components/NavigationBar";
import { Card } from '../../global-components/core/CardProd/Card';
import { useParams } from 'react-router-dom';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [storeID, setStoreID] = useState(null);
    const [storeInfo, setStoreInfo] = useState({});
    const { id } = useParams();
    console.log("hahaehljafhasjfash:",storeInfo);
    const fetchStoreData = async () => {
        try {
            const storeResponse = await axios.get(`http://localhost:8000/api/store/get/by-id/${id}`);
            const storeData = storeResponse.data.data;
            setStoreInfo(storeData);
            setStoreID(storeData.id);
        } catch (error) {
            console.error("Error fetching store data:", error);
            message.error('Error fetching store data');
        }
    };

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

    const filteredProducts = products.filter(product => product.store_id === storeID);

    return (
        <>
            <Row>
                <Col span={24}> <Header /></Col>
            </Row>
            <main>
                <Row>
                    <Col span={1} />
                    <Col span={22}><HermesShop data={storeInfo} /></Col>
                    <Col span={1} />
                </Row>
                <Row>
                    <Col span={24}> <NavigationBar /></Col>
                </Row>
                <Row>
                    <Col span={2}/>
                    <Col span={20} style={{ display: "flex", justifyContent:"center" }}>
                        <Card data={filteredProducts} />
                    </Col>
                    <Col span={2} />
                </Row>
            </main>
            <Row>
                <Col span={24}> <Footer /></Col>
            </Row>
        </>
    );
};

export default Store;