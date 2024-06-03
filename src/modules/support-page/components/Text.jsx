import { Row, Col } from "antd";
import "../styles/Text.css";
const Texts = () => {
  return (
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
      <Col xs={20} sm={20} md={20} lg={20} xl={20} className="text">
        <p className="Ctext">
          [Safe when shopping] Please do not share personal information: login
          password, OTP code and ShopeePay wallet PIN... with anyone, including
          Shopee staff. If your account signs of being logged in abnormally,
          please contact Shopee Customer Service. See more about Safe Shopping
          at Link
        </p>
      </Col>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}></Col>
    </Row>
  );
};
export default Texts;