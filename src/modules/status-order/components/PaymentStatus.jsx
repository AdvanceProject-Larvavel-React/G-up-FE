import { Button, Col, Row, Space } from "antd";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const PaymentStatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Container = styled.div`
  width: 450px;
  background: linear-gradient(180deg, #DCF9E0 0%, #FFFFFF 30.21%);
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 
              0px 105px 63px rgba(0, 0, 0, 0.05), 
              0px 47px 47px rgba(0, 0, 0, 0.09), 
              0px 12px 26px rgba(0, 0, 0, 0.1), 
              0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 30px;
  text-align: center;
`;

const Header = styled.div`
  margin-bottom: 20px;

  h1 {
    font-weight: 800;
    font-size: 26 px;
    line-height: 40px;
    text-align: center;
    color: #2B2B2F;
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  max-width: 100px;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;

  .ant-btn {
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .ant-btn:hover {
    transform: translateY(-2px);
  }
`;

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const message = queryParams.get("message");
  const payType = queryParams.get("payType");
  const orderInfo = queryParams.get("orderInfo");
  const amount = queryParams.get("amount");

  return (
    <PaymentStatusWrapper>
      <Container>
        <Header>
          <h1>{message === "Successful." ? "Payment Successful!" : "Payment Failed!"}</h1>
        </Header>
        <div className="content">
          {message === "Successful." ? (
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Logo
                  src="https://res.cloudinary.com/duas1juqs/image/upload/v1703351741/Web%20DDA%20COMECTIC/gurc3wpnyhzqpsdqibgd.png"
                  alt="logo"
                />
              </Col>
              <Col span={24}>
                <h2>Order Details</h2>
                <p>Payment type: {payType}</p>
                <p>Order information: {orderInfo}</p>
                <p>Amount paid: $ {amount}</p>
              </Col>
            </Row>
          ) : (
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Logo
                  src="https://res.cloudinary.com/duas1juqs/image/upload/v1703325910/Web%20DDA%20COMECTIC/claem76qdwwlnmglebap.png"
                  alt="logo"
                />
              </Col>
              <Col span={24}>
                <h2>Payment Failed!</h2>
                <p>Sorry, your payment failed for some reason. You can re-order or try to test the connection.</p>
              </Col>
            </Row>
          )}
        </div>
        <Footer>
          <Space direction="horizontal">
            {message === "Successful." ? (
              <Button type="primary" key="history" href="/history">
                SHOW
              </Button>
            ) : (
              <Button type="primary" key="retry" href="/cart">
                Return to payment page
              </Button>
            )}
          </Space>
        </Footer>
      </Container>
    </PaymentStatusWrapper>
  );
};

export default PaymentStatus;