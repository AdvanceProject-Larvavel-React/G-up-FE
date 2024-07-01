import { Col, List, Rate, Row } from "antd";
import styled from "styled-components";
import ProductComment from "./ProductComment";
import ProductReview from "./ProductReview";
export const ProductRevi = () => {
  const productData = {
    id: 1,
    name: "Áo thun nam",
    description: "Áo thun cotton dành cho nam giới",
    price: 250000,
    reviews: [
      {
        id: 1,
        user: "Nguyễn Văn A",
        rating: 4.5,
        comment: "Sản phẩm rất tốt, đúng như mô tả!",
        date: "2024-06-14",
      },
      {
        id: 2,
        user: "Trần Thị B",
        rating: 5,
        comment: "Tuyệt vời, tôi rất hài lòng!",
        date: "2024-06-15",
      },
      // Thêm các review khác nếu cần
    ],
    comments: [
      {
        id: 1,
        user: "Hoàng Anh",
        content: "Mình thích màu sắc của sản phẩm này!",
        datetime: "2024-06-13",
      },
      {
        id: 2,
        user: "Ngọc Lan",
        content: "Bạn nào đã mua cho tôi xin review với!",
        datetime: "2024-06-16",
      },
      // Thêm các comment khác nếu cần
    ],
  };
  const ReviewContainer = styled.div`
    width: 80%;
    padding: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

  const ReviewTitle = styled.h2`
    margin-bottom: 16px;
  `;

  const ReviewMeta = styled.div`
    margin-bottom: 8px;
  `;

  const ReviewContent = styled.p`
    margin-bottom: 0;
  `;
  return (
    <>
      <Row span={24}>
        <Col span={3}></Col>
        <Col span={21}>
          <ProductReview data={productData} />
        </Col>
      </Row>

      <Row>
        <Col span={4} />
        <Col span={20}>
          <ReviewContainer>
            <ReviewTitle>Đánh giá sản phẩm</ReviewTitle>
            <List
              itemLayout="vertical"
              dataSource={productData.reviews}
              renderItem={(item) => (
                <List.Item>
                  <ReviewMeta>
                    <strong>{item.user}</strong> - <small>{item.date}</small>
                  </ReviewMeta>
                  <Rate disabled defaultValue={item.rating} />
                  <ReviewContent>{item.comment}</ReviewContent>
                </List.Item>
              )}
            />
          </ReviewContainer>
        </Col>
        <Col span={2} />
      </Row>
      <hr />
      <Row gutter={16}>
        <Col span={24}>
          <ProductComment comments={productData.comments} />{" "}
        </Col>
      </Row>

      <Row>
        <Col span={24}></Col>
      </Row>
    </>
  );
};