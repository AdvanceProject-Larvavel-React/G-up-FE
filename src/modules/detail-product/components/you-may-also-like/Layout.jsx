import { Col, Row } from "antd";
import YouMayAlsoLike from "./YouMayAlsoLike";


export const YouMayAlso = (props) => {
    const {productData} = props.data;
  return (
    <>
     <Row span={24}>
     <Col span={2}></Col>
     <Col span={20}>
        <YouMayAlsoLike data ={productData}/>
     </Col>
     <Col span={2}></Col>
     </Row>
     <Row span={24}>
     <Col span={2}></Col>
     <Col span={20}>
        <YouMayAlsoLike data ={productData}/>
     </Col>
     <Col span={2}></Col>
     </Row>
    </>
  );
};
