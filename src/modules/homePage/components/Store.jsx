import { Row, Col, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/CategoryBody.css";
import {  } from "../../../global-components/core/CardProd/Card";
import CardStore from "../../../global-components/core/CardStore/CardStore";

export const Store = () => {
  const [stores, setStore] = useState([]);
  

  const fetchStoreData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/store/get/active"
      );
      const storeData = response.data.data;
      setStore(storeData);
      console.log(stores);
    } catch (error) {
      message.error("Error fetching products data");
    }
  };

  useEffect(() => {
    fetchStoreData();
  }, []);

  return (
    <>
      <Row className="productt" gutter={[16, 16]} justify="center">
        {stores.map((store) => (
          <Col span={3} key={store.id} style={{margin:"1px"}}>
            <CardStore data={store} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
