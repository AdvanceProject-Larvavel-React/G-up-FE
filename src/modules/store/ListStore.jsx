import { Col, Row } from "antd";
import Store from "../homePage/components/Store";

export const ListStore = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <Store />
        </Col>
      </Row>
    </>
  );
};
