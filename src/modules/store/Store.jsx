import { Col, Pagination, Row, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardFromStore } from "../../global-components/core/CardProd/CardFromStore";
import Footer from "../../global-components/core/footers/Footer";
import Header from "../../global-components/core/headers/Header";
import "../store/styles/Store.css";
import HermesShop from "./components/HermesShop";
import NavigationBar from "./components/NavigationBar";

const Store = () => {
  const [products, setProducts] = useState([]);
  const [storeID, setStoreID] = useState(null);
  const [storeInfo, setStoreInfo] = useState({});
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
  });
  const { id } = useParams();

  const fetchStoreData = async () => {
    try {
      const storeResponse = await axios.get(
        `http://localhost:8000/api/store/get/by-id/${id}`
      );
      const storeData = storeResponse.data.data;
      setStoreInfo(storeData);
      setStoreID(storeData.id);
    } catch (error) {
      console.error("Error fetching store data:", error);
      message.error("Error fetching store data");
    }
  };

  const fetchProductsData = async (page = 1, pageSize = 3) => {
    try {
      const productResponse = await axios.get(
        "http://localhost:8000/api/product/get/active",
        {
          params: { page, pageSize },
        }
      );
      const productsData = productResponse.data.data;
      setProducts(productsData);
      setPagination({
        current: productResponse.data.current_page,
        pageSize: productResponse.data.per_page,
        total: productResponse.data.total,
      });
    } catch (error) {
      console.error("Error fetching products data:", error);
      message.error("Error fetching products data");
    }
  };

  useEffect(() => {
    fetchStoreData();
    fetchProductsData(pagination.current, pagination.pageSize);
  }, [pagination.current, pagination.pageSize]);

  const handlePaginationChange = (page, pageSize) => {
    setPagination({ ...pagination, current: page, pageSize });
  };

  const filteredProducts = products.filter(
    (product) => product.store_id === storeID
  );

  return (
    <>
      <Row>
        <Col span={24}>
          {" "}
          <Header />
        </Col>
      </Row>
      <main>
        <Row>
          <Col span={1} />
          <Col span={22}>
            <HermesShop data={storeInfo} />
          </Col>
          <Col span={1} />
        </Row>
        <Row>
          <Col span={24}>
            {" "}
            <NavigationBar />
          </Col>
        </Row>
        <Row style={{ border: "1px solid black", margin: "50px 0 50px 0px" }}>
          <Row>
            <Col span={24}>
              <center style={{boxShadow: "0 4px 8px rgba(0,0,0,0.1)", padding: "10px", borderRadius: "8px", backgroundColor: "#f0f0f0", fontSize:"28px"}}>
                Products from Our Store
              </center>

              {/* <center>Products from Our Store</center> */}
            </Col>
          </Row>
          <Col span={2} />
          <Col
            span={20}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <CardFromStore data={filteredProducts} />
            {pagination.total > 0 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Pagination
                  current={pagination.current}
                  pageSize={pagination.pageSize}
                  total={pagination.total}
                  onChange={handlePaginationChange}
                  showSizeChanger
                  pageSizeOptions={["7", "10", "20", "50"].map(String)}
                />
              </div>
            )}
          </Col>
          <Col span={2} />
        </Row>
      </main>
      <Row>
        <Col span={24}>
          {" "}
          <Footer />
        </Col>
      </Row>
    </>
  );
};

export default Store;
