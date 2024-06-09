import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import "./styles/MainBody.css";
import Category from "../../global-components/core/CardShop/Category";

export const MainBody = () => {
  const [products, setProducts] = useState([]);
  const [storeInfo, setStoreInfo] = useState({});
  const [categories, setCategories] = useState([]);

  // Fetch the store profile data
  const fetchStoreData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/store/get/active"
      );
      const storeData = response.data.data;
      setStoreInfo(storeData);
    } catch (error) {
      message.error("Error fetching profile data");
    }
  };

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/category/get/active"
      );
      const categories = response.data.data;
      setCategories(categories);
    } catch (error) {
      message.error("Error fetching profile data");
    }
  };

  // Fetch active products data
  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const product = response.data.data;
      setProducts(product);
    } catch (error) {
      console.error("Error fetching products data:", error);
      message.error("Error fetching products data");
    }
  };

  useEffect(() => {
    fetchStoreData();
    fetchProductsData();
    fetchCategoryData();
  }, []);

  const filteredBestSellProds = products.filter(
    (product) => product.sold >= 100 // Điều kiện set product ở đây
  );

  console.log("Thông tin sản phẩm bán ra nhiều hơn 100", filteredBestSellProds);
  console.log("Thông tin của store:", storeInfo);
  console.log("Category:", categories);

  return (
    <>
      <Row className="catego" gutter={[1, 8]}>
        {categories.map((category) => (
          <Col key={category.id} xs={24} sm={12} md={1} lg={6} xl={6}>
            <Category category={category} />
          </Col>
        ))}
        {/* Bên dưới là category theo từng sản phẩm được xác định */}
        {/* {products.map((product) => (
            <div key={product.id}>
              <h2>Category của product {product.name}</h2>
              <p>Name: {product.category.name}</p>
              {console.log(
                `Category của sản phẩm ${product.id}: `,
                product.category
              )}
            </div>
          ))} */}
      </Row>
      <Row>
        <Col>Banner</Col>
      </Row>
      <Row>
        <Col>Children Search</Col>
      </Row>
      <Row>
        <Col>Children NavLink</Col>
      </Row>
      <Row>
        <Col>Slide product component</Col>
      </Row>
      <Row>
        <Col>Category</Col>
      </Row>
      <Row>
        <Col>Daily discover</Col>
      </Row>
    </>
  );
};

export default MainBody;
