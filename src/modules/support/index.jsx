import { Layout } from 'antd';

import './styles/support.css';
import HeaderSection from './components/Header';
import FooterSection from './components/Footer';
import { Outlet } from 'react-router-dom';


const Support = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <Outlet/>
        <FooterSection />
      </Layout>
    </>
  );
}

export default Support;
