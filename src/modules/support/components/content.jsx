import { Row, Col } from 'antd';

import Text from './Text';
import '../styles/support.css';
import Categories from '../Categories';
import CategoryData from '../__mock__/CategoryData';


const ContentSection = () => {
  return (
    <div>
      <div className="content1">
        <Text />
        <p className="ca">CATEGORIES</p>
        <div className='cate'>
          <Row gutter={[16, 16]} justify="center">
            {CategoryData.map((item, index) => (
              <Col key={index} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                <div className="item">
                    <Categories data={item} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
