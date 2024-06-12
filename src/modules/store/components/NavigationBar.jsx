import { useState } from 'react';
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
    line-height: 200px;
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

  const items = [
    { key: 'SHOP', title: 'SHOP' },
    { key: 'PRODUCT', title: 'PRODUCT' },
    { key: 'PRODUCT LIST', title: 'PRODUCT LIST' },
    { key: 'LIVE', title: 'LIVE' }
  ];

  const carouselItems = [
    'https://tse2.mm.bing.net/th?id=OIP.7hGzglnsY1nLTQBy5gV7LAHaEK&pid=Api&P=0&h=220',
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
                document.querySelector('.ant-carousel').slick.slickGoTo(index);
              }}
            >
              <div className="nav-item">{item.title}</div>
            </NavigationBarItem>
          ))}
        </Row>
      </div>
      <Carousel autoplay ref={carousel => (window.carousel = carousel)}>
        {carouselItems.map((src, index) => (
          <div key={index} className="carousel-content">
            <img src={src} alt={items[index].title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        ))}
      </Carousel>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
