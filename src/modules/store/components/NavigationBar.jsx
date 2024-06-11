
import { Anchor, Row, Col } from 'antd';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
    const items = [
        { key: 'SHOP', href: '#part-1', title: 'SHOP' },
        { key: 'PRODUCT', href: '#part-2', title: 'PRODUCT' },
        { key: 'PRODUCT LIST', href: '#part-3', title: 'PRODUCT LIST' },
        { key: 'LIVE', href: '#part-4', title: 'LIVE' }
    ];

    const style = {
        padding: '8px',
        background: '#00a0e9',
        color: '#fff',
        textAlign: 'center',
    };

    return (
        <div className="navigation-bar">
            <div style={{ padding: '20px' }}>
                <Row gutter={16}>
                    {items.map((item) => (
                        <Col className="gutter-row" span={6} key={item.key}>
                            <Anchor.Link {...item}>
                                <div style={style}>{item.title}</div>
                            </Anchor.Link>
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <div
                    id="part-1"
                    style={{
                        width: '100vw',
                        height: '50px',
                        textAlign: 'center',
                        background: 'rgba(0,255,0,0.02)',
                    }}
                />
                <div
                    id="part-2"
                    style={{
                        width: '100vw',
                        height: '50px',
                        textAlign: 'center',
                        background: 'rgba(0,0,255,0.02)',
                    }}
                />
                <div
                    id="part-3"
                    style={{
                        width: '100vw',
                        height: '50px',
                        textAlign: 'center',
                        background: '#FFFBE9',
                    }}
                />
                <div
                    id="part-4"
                    style={{
                        width: '100vw',
                        height: '50px',
                        textAlign: 'center',
                        background: 'rgba(255,0,0,0.02)',
                    }}
                />
            </div>
        </div>
    );
};

export default NavigationBar;
