
import { Layout, Row, Col } from 'antd';
import Saerch from './search';
import Text from './text';
import '../styles/support.css';
import Categories from './categories';
import CategoryData from './categoryData';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  
  lineHeight: '50px',
  color: '#fff',
  backgroundColor: '#B40010',
  justifyContent: 'center',
  alignItems: 'center', 
};

const ContentSection = () => {
  

  return (
    <div>
      <Content style={contentStyle}>
        <h2 className="cTitle">Hello! How can we help you?</h2>
        <Saerch />
      </Content>
      
      <div className="content1">
        <Text />
        <p className="category">CATEGORIES</p>
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
