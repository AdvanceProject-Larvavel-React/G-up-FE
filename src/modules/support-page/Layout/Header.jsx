import { Layout, Row, Col } from "antd";
import logo from "../../../assets/images/logo-gup.png";
import Title from "antd/es/typography/Title";
import Search from "../components/Search";
import "../styles/Support.css"
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#B40010",
};
const titleStyle = {
  color: "red",
  marginTop: "30px",
  marginLeft : "28px"
};
const HeaderSection = () => {
  return (
    <>
      <Layout>
        <Row>
          <Col xs={0} sm={0} md={2} lg={2} xl={2}></Col>
          <Col xs={4} sm={4} md={2} lg={2} xl={2}>
            <img src={logo} alt="Logo" className="header-logo" />
          </Col>
          <Col
            xs={20}
            sm={20}
            md={20}
            lg={20}
            xl={20}
          >
            <Title level={2} style={titleStyle} >
              G-up Support Center
            </Title>
          </Col>
        </Row>
        <Content style={contentStyle}>
          <h2 className="cTitle">Hello! How can we help you?</h2>
          <Search />
        </Content>
      </Layout>
    </>
  );
};

export default HeaderSection;
