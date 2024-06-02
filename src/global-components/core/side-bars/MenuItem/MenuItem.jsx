
import styles from "./menuItem.module.css";
import { NavLink } from "react-router-dom";
export default function MenuItem({
  icon,
  title,
 
  onClick,
  params,
  index,
  to,
}) {
  return (
    <NavLink to={to} className={styles["menu__item-link"]}>
      <div
        className={`${styles["menu__item"]} ${
          params === index ? `${styles["active"]}` : ""
        } `}
        onClick={onClick}
      >
        {icon}
        <h3 className={`${styles["menu__item-title"]}`}>{title}</h3>
      </div>
    </NavLink>
  );
}

