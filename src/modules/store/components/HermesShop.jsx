import { Row, Col } from "antd";
import { StarOutlined } from '@ant-design/icons';
import '../styles/HermesShop.css';
import FollowBtn from "./FollowBtn";

const HermesShop = (props) => {
    const { name, avatar } = props.data;
    return (
        <Row>
            <Col span={1} />
            <Col span={3}>
                <div className="logo">
                    <img src={avatar} alt="Hermes" width={"150px"} height={"150px"} style={{margin:"10px", borderRadius:"14px"}} />
                </div>
            </Col>
            <Col span={9}>
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
