import { Col, Row } from "antd";
const ProductComment = (props) => {
  const { data } = props;
  if (!data || !Array.isArray(data.comments)) {
    console.error("Invalid data prop in ProductComment component", data);
    return null;
  }
  return (
    <Row span={24}>
      <Col span={24}>
        {data.comments.map((comment, index) => (
          <div key={index}></div>
        ))}
      </Col>
    </Row>
  );
};
export default ProductComment;
