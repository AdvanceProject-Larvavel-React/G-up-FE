import { Row, message,Col } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams,Link } from "react-router-dom";
import "./styles/CategoryBody.css";
import { Card } from "../../global-components/core/CardProd/Card";
import { FaChevronLeft } from "react-icons/fa";

export const CategoryBody = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const header = decodeURIComponent(query);

  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const productData = response.data.data;
      setProducts(productData);
      console.log(products);
    } catch (error) {
      message.error("Error fetching products data");
    }
  };

  useEffect(() => {3
    fetchProductsData();
  }, []);

  const filteredProd = products.filter(
    (product) => product.category_id === parseInt(id, 10)
  );
  return (
    <>
      <Link to={`/home`} className="category-link">
        <FaChevronLeft className="back" size={24} />
      </Link>
      <h2 className="titleCa text-center">{header}</h2>
      <Row gutter={[16, 16]} justify="center">
        {filteredProd.map((prod) => (
          <Col key={prod.id} xs={24} sm={12} md={6} lg={6} xl={6}>
            <Card data={prod} />
          </Col>
        ))}
      </Row>
    </>
  );
};
