import { Layout } from 'antd';
import './styles/Support.css';
import HeaderSection from './Layout/Header';
import FooterSection from './Layout/Footer';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Support = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <Outlet />
        <FooterSection />
      </Layout>
    </>
  );
}

export default Support;
