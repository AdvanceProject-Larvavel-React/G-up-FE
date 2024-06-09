import { Col, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const CategoryBody = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const numberOnly = id.match(/\d+/);
    const idAsNumber = numberOnly ? parseInt(numberOnly[0], 10) : null;
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    const header = decodeURIComponent(query);
  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const product = response.data.data;
      setProducts(product);
    } catch (error) {
      message.error("Error fetching products data");
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, []);
  const filteredProd = products.filter(
    (product) => product.category.id >= idAsNumber
    );
    console.log(filteredProd);
    return (
        <>
            <h2>Đây là header: { header}</h2>
        {filteredProd.map((prod) => (
          <Col key={prod.id} xs={24} sm={12} md={1} lg={6} xl={6}>
                {prod.name}
                {prod.file_paths}
                {prod.description}
          </Col>
        ))}
      </>
    );
};