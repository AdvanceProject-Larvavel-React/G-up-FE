import { Row, Col, Space, Divider } from "antd";
import AddToCartButton from "../../../../global-components/core/button/AddToCartButton";
import BuyNowButton from "../../../../global-components/core/button/BuyNowbutton";
import FavoriteButton from "../../../../global-components/core/button/FavoriteButton";
import { QuantityAdjuster } from "../../../../global-components/core/button/QuantityAdjuster";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";
import Voucher from "./Voucher";
import Title from "antd/es/typography/Title";
export const InforProd = (props) => {
  const { name, price,sold, description } = props.prod;
  console.log(name);
  return (
    <>
     <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Title level={2}>{name}</Title>
        <RatingDisplay sold={sold} />
        <PriceDisplay price={price} />
        <h6>{description}</h6>
        <Divider />
        <Voucher  />
        <Row gutter={16} align="middle">
          <Col span={14}>
            <QuantityAdjuster />
          </Col>
          <Col span={10}>
            <FavoriteButton />
          </Col>
        </Row>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <BuyNowButton />
          </Col>
          <Col span={12}>
            <AddToCartButton />
          </Col>
        </Row>
      </Space>
      {/* <Space direction="vertical" size={16}>
        <RatingDisplay />
      </Space>
      <PriceDisplay price={price} />
      <Space direction="vertical" size={16}></Space>
      <Voucher />
        {name}
      <Row></Row>
      <Space direction="vertical" size={16}>
        <Row gutter={16}>
          <Col span={14}>
            <QuantityAdjuster />
          </Col>
          <Col span={10}>
            <FavoriteButton />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={14}>
            <BuyNowButton />
          </Col>
          <Col span={10}>
            <AddToCartButton />
          </Col>
        </Row>
      </Space> */}
    </>
  );
};
