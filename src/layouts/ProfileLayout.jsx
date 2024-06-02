
import Header from "../global-components/core/headers/Header";
import Footer from "../global-components/core/footers/Footer";
import SideBar from "../global-components/core/side-bars/SideBar";
import styles from "./profileLayout.module.css";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={`${styles["container"]}`}>
        <SideBar className={`${styles["sidebar"]}`} />
        <div className={`${styles["child"]}`}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}