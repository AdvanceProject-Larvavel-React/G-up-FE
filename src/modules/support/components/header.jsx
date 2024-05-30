
import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: 'red',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#ffffff',
};

const HeaderSection = () => {
    return (
      <>
        <Header style={headerStyle}>
        <img src="src/assets/images/Logo/Orange E-commerce Online Store Logo (1) 1.png" alt="Logo" className="header-logo" />
        <h1 className='title'>Grown-up`s Support center</h1>
        </Header>  
      </>
  );
}

export default HeaderSection;
