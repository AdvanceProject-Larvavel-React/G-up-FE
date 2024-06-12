import { Outlet } from "react-router-dom";
import Header from "../../global-components/core/headers/Header";
import Footer from "../../global-components/core/footers/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
