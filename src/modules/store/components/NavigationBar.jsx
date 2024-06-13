import { useState, useRef } from 'react';
import { Row, Col, Carousel } from 'antd';
import styled from 'styled-components';

// Styled components
const NavigationBarContainer = styled.div`
  .navigation-bar {
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;
    margin-top: 50px;
    font-weight: bold;
  }

  .carousel-content {
    text-align: center;
    height: 400px;
    line-height: 600px; /* Sửa lại line-height để phù hợp với chiều cao của ảnh */
    background: #364d79;
    color: #fff;
    overflow: hidden;
    font-size: 24px;
    font-weight: bold;
  }

  .active {
    border-bottom: 2px solid red;
    font-weight: bold;
    color: red;
  }
`;

const NavigationBarItem = styled(Col)`
  text-align: center;
  cursor: pointer;
  padding: 10px 0;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: red;
  }

  .nav-item {
    color: inherit;
    font-size: 18px;
    text-decoration: none; /* Remove underline */
  }
`;

const NavigationBar = () => {
  const [activeKey, setActiveKey] = useState('SHOP');
  const carouselRef = useRef(null);

  const items = [
    { key: 'SHOP', title: 'SHOP' },
    { key: 'PRODUCT', title: 'PRODUCT' },
    { key: 'PRODUCT LIST', title: 'PRODUCT LIST' },
    { key: 'LIVE', title: 'LIVE' }
  ];

  const carouselItems = [
    'https://res.cloudinary.com/dvgiuwfuv/image/upload/v1718184606/shop_du7qog.jpg',
    'https://res.cloudinary.com/dvgiuwfuv/image/upload/v1718184595/products_uzfmeu.jpg',
    'https://res.cloudinary.com/dvgiuwfuv/image/upload/v1718184449/products_list_euqsyk.jpg',
    'https://res.cloudinary.com/dvgiuwfuv/image/upload/v1718184424/live_urtcwb.jpg',
  ];

  return (
    <NavigationBarContainer>
      <div className="navigation-bar">
        <Row gutter={16}>
          {items.map((item, index) => (
            <NavigationBarItem
              span={6}
              key={item.key}
              className={item.key === activeKey ? 'active' : ''}
              onClick={() => {
                setActiveKey(item.key);
                carouselRef.current.goTo(index);
              }}
            >
              <div className="nav-item">{item.title}</div>
            </NavigationBarItem>
          ))}
        </Row>
      </div>
      <Carousel
        autoplay
        ref={carouselRef}
        afterChange={(current) => {
          setActiveKey(items[current].key);
        }}
      >
        {carouselItems.map((src, index) => (
          <div key={index} className="carousel-content">
            <img src={src} alt={items[index].title} style={{ width: '100%', height: '600px' }} />
          </div>
        ))}
      </Carousel>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
