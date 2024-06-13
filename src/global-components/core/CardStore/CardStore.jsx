import { Link } from "react-router-dom";
import "../../../assets/styles/CardStore.css";
import { Card, Row, Col } from "antd";

const { Meta } = Card;
const CardStore = (props) => {
  const { name: storeName, avatar, id } = props.data;
  return (
    <Row justify="center" style={{ margin: "20px 0" }}>
      <Col>
        <Link
          to={`/store/${id}`}
          style={{ textDecoration: "none", color: "#1890ff" }}
        >
          <div className="card-store">
            {" "}
            
            <Card
              hoverable
              cover={
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url(${avatar})`,
                    height: "100px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maxWidth: "120px",
                  }}
                />
              }
              style={{ width: 180 }}
            >
              <Meta title={storeName} style={{ textAlign: "center" }} />
            </Card>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default CardStore;
