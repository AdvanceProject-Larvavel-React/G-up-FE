import { Row, Col, Space } from "antd";
import AddToCartButton from "../../../../global-components/core/button/AddToCartButton";
import BuyNowButton from "../../../../global-components/core/button/BuyNowbutton";
import FavoriteButton from "../../../../global-components/core/button/FavoriteButton";
import { QuantityAdjuster } from "../../../../global-components/core/button/QuantityAdjuster";
import PriceDisplay from "./PriceDisplay";
import RatingDisplay from "./RatingDisplay";
import Voucher from "./Voucher";
export const InforProd = (props) => {
  const { name } = props.prod;
  return (
    <>
      <Space direction="vertical" size={16}>
        <RatingDisplay />
      </Space>
      <PriceDisplay />
      <Space direction="vertical" size={16}></Space>
      <Voucher />
      
      {name}
      <Row></Row>
      <Space direction="vertical" size={16}>
        {" "}
        {}
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
      </Space>
    </>
  );
};
