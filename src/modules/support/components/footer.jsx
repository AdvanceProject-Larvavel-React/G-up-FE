
import { Layout } from 'antd';
import '../styles/footer.css';

const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  backgroundColor: '#D9D9D9',
};

const FooterSection = () => {
  return (
    <Footer style={footerStyle}>
      
      <p className='foot'>
        Do you want to find more information?
      </p>
      <div className='foot1'>
      <div className='number'>
        0902183536
      </div>
        <div className='email'>duc.huynh@122.com</div>
      </div>
    </Footer>
  );
}

export default FooterSection;
