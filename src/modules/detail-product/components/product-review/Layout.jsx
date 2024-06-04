import { Col, Row } from "antd";
import ProductReview from "./ProductReview";
import ProductComment from "./ProductComment";
export const ProductRevi = (props) => {
  const { productData } = props.data;
  return (
    <>
      <Row span={24}>
      <Col span={3}></Col>
        <Col span={21}>
          <ProductReview data={productData} />
        </Col>
      </Row>
      <Row span={24}>
        <Col span={24}>
          <ProductComment data={productData} />
        </Col>
      </Row>
    </>
  );
};
