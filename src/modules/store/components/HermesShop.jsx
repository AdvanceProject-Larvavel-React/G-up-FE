import { Row, Col } from "antd";
import { StarOutlined } from '@ant-design/icons';
import '../styles/HermesShop.css';
import FollowBtn from "./FollowBtn";

const HermesShop = (props) => {
    const { name } = props.data;
    return (
        <Row>
            <Col span={1} />
            <Col span={2}>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dvgiuwfuv/image/upload/v1717243048/G-UP-Project/Orange_E-commerce_Online_Store_Logo_1_1_shq7ml.png" alt="Hermes" />
                </div>
            </Col>
            <Col span={10}>
                <div className="follower-count">
                    <span style={{ fontWeight: 'bold', fontSize: '25px' }}>{name}</span> <br />
                    <span> <StarOutlined style={{ color: 'yellow', fontSize: '20px' }} />4.5/50 | 629.4K FOLLOWERS</span>
                </div>
            </Col>
            <Col span={8} />
            <Col span={3} className="follow-btn-container">
                <FollowBtn />
            </Col>
            <Col span={1} />
        </Row>
    );
};

export default HermesShop;
