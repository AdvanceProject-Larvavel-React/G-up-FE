
import styles from "./cardItem.module.css";

export default function CardItem({ title, decs, text }) {
  return (
    <div className={styles["cardItem"]}>
      <h3 className={styles["cardItem__title"]}>{title}</h3>
      <p className={styles["cardItem__decs"]}>{decs}</p>
      <span className={styles["cardItem__btn"]}>
        <a href="">{text}</a>
      </span>
    </div>
  );
}

CardItem.defaultProps = {
  title: "",
  decs: "",
  text: "",
};