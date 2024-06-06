import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Typography } from 'antd';
const { Title } = Typography;
import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <div style={styles.section}>
                        <Title level={4} style={styles.sectionTitle}>MY ACCOUNT</Title>
                        <ul style={styles.linkList}>
                            <FooterLink key={1} data={{ href: "link1", text: 'Login/Register' }} />
                            <FooterLink key={2} data={{ href: "link2", text: 'Order Status' }} />
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <div style={styles.section}>
                        <Title level={4} style={styles.sectionTitle}>ABOUT</Title>
                        <ul style={styles.linkList}>
                            <FooterLink key={3} data={{ href: "link3", text: 'My Story' }} />
                            <FooterLink key={4} data={{ href: "link4", text: 'Media' }} />
                            <FooterLink key={5} data={{ href: "link5", text: 'Sustainability' }} />
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <div style={styles.section}>
                        <Title level={4} style={styles.sectionTitle}>HELP</Title>
                        <ul style={styles.linkList}>
                            <FooterLink key={6} data={{ href: "link6", text: 'Shipping' }} />
                            <FooterLink key={7} data={{ href: "link7", text: 'Returns' }} />
                            <FooterLink key={8} data={{ href: "link8", text: 'Sizing' }} />
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                    <div style={styles.section}>
                        <Title level={4} style={styles.sectionTitle}>LEGAL STUFF</Title>
                        <ul style={styles.linkList}>
                            <FooterLink key={9} data={{ href: "link9", text: 'Terms Of Use' }} />
                            <FooterLink key={10} data={{ href: "link10", text: 'Terms Of Sale' }} />
                            <FooterLink key={11} data={{ href: "link11", text: 'Privacy Policy' }} />
                        </ul>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <div style={styles.logoAndIcons}>
                        <div style={styles.grownUp}>
                            <img src="https://res.cloudinary.com/dvgiuwfuv/image/upload/v1717243048/G-UP-Project/Orange_E-commerce_Online_Store_Logo_1_1_shq7ml.png" alt="Grown-Up" style={styles.logo} />
                        </div>
                        <div className="footer-icons" style={styles.footerIcons}>
                            <a href="#" className="icon-link" style={styles.iconLink}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#" className="icon-link" style={styles.iconLink}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="icon-link" style={styles.iconLink}>
                                <FontAwesomeIcon icon={faDove} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row justify="center">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div className="copyright" style={styles.copyright}>
                        <Typography.Paragraph style={{ color: 'white' }}>G 2023 | Phạm Thị Lan Anh - Huỳnh Đức - Đỉnh Thị Hồng Duyên - Hồ Thị Xươm - Phạm Thị Hà</Typography.Paragraph>
                    </div>
                </Col>
            </Row>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: 'black',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
    },
    section: {
        marginBottom: '20px',
        padding: '0 10px',
    },
    sectionTitle: {
        color: 'white',
        marginBottom: '10px',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
    },
    logoAndIcons: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    grownUp: {
        marginBottom: '20px',
    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
    },
    footerIcons: {
        display: 'flex',
        justifyContent: 'center',
    },
    iconLink: {
        margin: '0 10px',
        textDecoration: 'none',
        color: 'white',
    },
    copyright: {
        marginTop: '20px',
    },
};

export default Footer;
