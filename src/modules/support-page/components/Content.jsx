import { Row, Col } from "antd";
import "../styles/Support.css";
import Categories from "../Categories";
import CategoryData from "../__mock__/CategoryData";
import Texts from "./Text";
const ContentSection = () => {
  return (
    <div>
      <div className="content1">
        <Texts />
        <div className="head">
          <p className="ca">CATEGORIES</p>
        </div>
        <div className="cate">
          <Row gutter={[16, 16]} justify="center">
            {CategoryData.map((item, index) => (
              <Col
                key={index}
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 8 }}
                className="d-flex justify-content-center"
              >
                <div className="item">
                  <Categories data={item} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default ContentSection;