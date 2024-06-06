import { Col, Row } from "antd";
import { ImageProd } from "./ImageProd";
import { InforProd } from "./InforProd";

export const DetailProd = (props) => {
  return (
    <>
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col md={2}></Col>
        <Col span={10}>
          <ImageProd prod={props.prod} />
        </Col>
        <Col span={1}></Col> 
        <Col span={10}>
          <InforProd prod={props.prod} />
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};
