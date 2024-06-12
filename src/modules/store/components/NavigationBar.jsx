import { useState } from 'react';
import { Anchor, Row, Col, Carousel } from 'antd';
import styled from 'styled-components';

// Styled components
const NavigationBarContainer = styled.div`
  .navigation-bar {
    margin-bottom: 30px;
    border-bottom: 1px solid #ddd;
    margin-top: 50px;
  
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
  transition: color 0.3s;

  &:hover {
    color: red;
  }

  .ant-anchor-link {
    color: inherit;
    font-size: 18px;
    text-decoration: none; /* Remove underline */
  }

  .ant-anchor-link-title {
    display: inline-block;
    width: 100%;
  }
`;

const NavigationBar = () => {
    const [activeKey, setActiveKey] = useState('SHOP');

    const items = [
        { key: 'SHOP', href: 'https://tse2.mm.bing.net/th?id=OIP.7hGzglnsY1nLTQBy5gV7LAHaEK&pid=Api&P=0&h=220', title: 'SHOP' },
        { key: 'PRODUCT', href: '#part-2', title: 'PRODUCT' },
        { key: 'PRODUCT LIST', href: '#part-3', title: 'PRODUCT LIST' },
        { key: 'LIVE', href: '#part-4', title: 'LIVE' }
    ];

    const carouselItems = items.map((item, index) => (
        <div key={index} className="carousel-content">
            {item.title}
        </div>
    ));

    return (
        <NavigationBarContainer>
            <div className="navigation-bar">
                <Row gutter={16}>
                    {items.map((item) => (
                        <NavigationBarItem
                            span={6}
                            key={item.key}
                            className={item.key === activeKey ? 'active' : ''}
                            onClick={() => setActiveKey(item.key)}
                        >
                            <Anchor.Link {...item} />
                        </NavigationBarItem>
                    ))}
                </Row>
            </div>
            <Carousel autoplay beforeChange={(current, next) => setActiveKey(items[next].key)}>
                {carouselItems}
            </Carousel>
        </NavigationBarContainer>
    );
};

export default NavigationBar;
