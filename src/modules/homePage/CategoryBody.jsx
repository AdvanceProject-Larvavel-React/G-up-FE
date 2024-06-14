import { Col, Row, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import { Card } from "../../global-components/core/CardProd/Card";
import "./styles/CategoryBody.css";

export const CategoryBody = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const header = query ? decodeURIComponent(query) : "Category";

  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const categoryData = await axios.get(
        "http://localhost:8000/api/category/get/active"
      );
      console.log(categoryData);
      setCategory(categoryData.data.data);
      const productData = response.data.data;
      setProducts(productData);
      console.log(products);
    } catch (error) {
      message.error("Error fetching products data");
    }
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  const filteredProd = id
    ? products.filter((product) => product.category_id === parseInt(id, 10))
    : category;
  return (
    <>
      <Link to={`/home`} className="category-link">
        <FaChevronLeft className="back" size={24} />
      </Link>
      <h2 className="titleCa text-center">{header}</h2>
      <Row className="catego " gutter={[16, 16]} justify="center">
        <Col span={0.5}></Col>
        {filteredProd.map((prod) => (
          <Col span={4} key={prod.id}>
            <Card data={prod} />
          </Col>
        ))}
        <Col span={1}></Col>
      </Row>
    </>
  );
};
