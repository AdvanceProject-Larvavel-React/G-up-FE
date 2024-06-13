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
    height: 600px;
    line-height: 600px; 
    background: #364d79;
    color: #fff;
    overflow: hidden;
    font-size: 24px;
    font-weight: bold;
    object-fit: cover;
  }

  .active {
    border-bottom: 2px solid red;
    font-weight: bold;
    color: red;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
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
    text-decoration: none; 
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
    'https://res.cloudinary.com/duas1juqs/image/upload/v1718295829/ojnzwx5hfcmphubpqmwu.jpg',
    'https://res.cloudinary.com/duas1juqs/image/upload/v1718295828/drodhy7dhfzoltgwn4ol.png',
    'https://res.cloudinary.com/duas1juqs/image/upload/v1718295828/ehdupkju8ghjz23axa5e.jpg',
    'https://res.cloudinary.com/duas1juqs/image/upload/v1718296625/cb6g83gdhnnzjcbftyaf.jpg',
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
          <div key={index} className="carousel-content" style={{height:"900px", width:"100%"}}>
            <img src={src} alt={items[index].title} style={{ width: '100%', height: '900px', objectFit: "cover" }} />
          </div>
        ))}
      </Carousel>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
