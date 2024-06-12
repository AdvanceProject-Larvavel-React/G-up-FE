import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(201, 201, 201, 0.1);
  border-radius: 8px;
  text-align: center;
  width: 300px;
  height: 160px;
  background-color: #c8deff;

  &:hover {
    transform: translateY(-5px);
  }

  .ant-card-head-title {
    font-size: 18px;
    color: #1890ff;
  }
`;

const Count = styled.p`
  font-size: 32px;
  color: #000;
  margin: 0;
  font-weight: bold;
`;

const StatCard = ({ title, count }) => {
  return (
    <StyledCard
      title={title}
      bordered={true}
      hoverable={true}
    >
      <Count>{count}</Count>
    </StyledCard>
  );
};

export default StatCard;