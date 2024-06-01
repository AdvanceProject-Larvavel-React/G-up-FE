import Saerch from './Search';
import { Layout } from 'antd';
import logo from '../../../assets/images/Logo/logo-gup.png'
const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: 'red',
  minHeight: 120,
  lineHeight: '120px',
  backgroundColor: '#ffffff',
};
const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  
  color: '#fff',
  backgroundColor: '#B40010',
  justifyContent: 'center',
  alignItems: 'center', 
};

const HeaderSection = () => {
    return (
      <>
        <Header style={headerStyle}>
        <img src={logo} alt="Logo" className="header-logo" />
        <h1 className='title'>Grown-up`s Support center</h1>
        </Header>  
         <Content style={contentStyle}>
        <h2 className="cTitle">Hello! How can we help you?</h2>
        <Saerch />
      </Content>
      </>
  );
}

export default HeaderSection;
