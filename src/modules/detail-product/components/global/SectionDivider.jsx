import { Col, Row } from "antd";
const titleStyle = {
    fontWeight: "bold",
    textAlign: "center",
}
export const SectionDivider = ({ title }) => {
  return (
    <>
      <Row className="section-divider" align="middle" justify="center">
        <Col span={8}>
          <hr className="line" />
        </Col>
        <Col span={6} className="title" style={titleStyle}>
          {title}
        </Col>
        <Col span={8}>
          <hr className="line" />
        </Col>
      </Row>
    </>
  );
};
