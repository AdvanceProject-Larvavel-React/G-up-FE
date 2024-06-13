import Body from "./components/Body"
import { Layout } from 'antd';
import HeaderSection from '../../global-components/core/headers/Header';
import FooterSection from '../../global-components/core/footers/Footer';
export const Index = () => {
  return (
    <>
        <Layout>
        <HeaderSection />
        <Body/>
        <FooterSection />
      </Layout>
    </>
  )
}
