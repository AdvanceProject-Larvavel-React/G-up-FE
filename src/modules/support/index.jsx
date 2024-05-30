import { Layout } from 'antd';

import './styles/support.css';
import HeaderSection from './components/header';
import ContentSection from './components/content';
import FooterSection from './components/footer';


const Support = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <ContentSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default Support;
