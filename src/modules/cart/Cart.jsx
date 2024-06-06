import { Row, Col } from 'antd';
import Footer from "../../global-components/core/footers/Footer";
import Header from "../../global-components/core/headers/Header";
import ShoppingCheckout from "./components/FormCheckOut";

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <Row>
                <Col span={24}> <Header /></Col>
            </Row>
            <main>
                <Row>
                    <Col span={24}> <ShoppingCheckout /></Col>
                </Row>
            </main>
            <Row>
                <Col span={24}> <Footer /></Col>
            </Row>
        </div>
    );
};

export default CheckoutPage;
