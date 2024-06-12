import { Row, Col, message, Pagination } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/CategoryBody.css";
import {  } from "../../../global-components/core/CardProd/Card";
import CardStore from "../../../global-components/core/CardStore/CardStore";



export const Store = () => {
  const [stores, setStores] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Đặt kích thước trang là 10 cho mỗi hàng

  const fetchStoreData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/store/get/active"
      );
      const storeData = response.data.data;
      setStores(storeData);
    } catch (error) {
      message.error("Error fetching store data");
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedStores = stores.slice(startIndex, endIndex);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const chunkedStores = chunkArray(paginatedStores, 5);

  return (
    <>
      {chunkedStores.map((storeChunk, index) => (
        <Row
          className="productt"
          gutter={[16, 16]}
          justify="center"
          key={index}
        >
          {storeChunk.map((store) => (
            <Col span={4} key={store.id} style={{ marginBottom: "30px" }}>
              <CardStore data={store} />
            </Col>
          ))}
        </Row>
      ))}
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={stores.length}
          onChange={onPageChange}
          showSizeChanger
        />
      </div>
    </>
  );
};

export default Store;