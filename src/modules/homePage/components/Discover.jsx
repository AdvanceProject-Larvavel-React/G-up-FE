import { Row, Col, message, Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/CategoryBody.css";

import { Card } from "../../../global-components/core/CardProd/Card";

export const Discover = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const fetchProductsData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/product/get/active"
      );
      const productData = response.data.data;
        setProducts(productData);
    } catch (error) {
      message.error("Error fetching products data");
    }
  };

  // Lọc sản phẩm theo điều kiện
  const filterProducts = () => {
    const filteredProds = products.filter(
      (product) => product.sold > 100 // Điều kiện lọc giá ở đây
    );
    setFilteredProducts(filteredProds);
  };

  useEffect(() => {
    fetchProductsData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products]);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  return (
    <>
      <Row className="productt" justify="center">
        {paginatedProducts.map((prod) => (
          <Col span={4} key={prod.id} style={{ marginBottom: "30px" }}>
            <Card data={prod} />
          </Col>
        ))}
      </Row>
      <div style={{ display: "flex", justifyContent: "right",marginBottom:15 }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredProducts.length}
          onChange={onPageChange}
          showSizeChanger
        />
      </div>
    </>
  );
};

export default Discover;
