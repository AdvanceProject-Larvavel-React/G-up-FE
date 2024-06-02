
import styles from "./profileDetailItem.module.css";

export default function ProfileDetailItem({ title, decs }) {
  return (
    <div className={`${styles["profile__item"]}`}>
      <h2>{title}</h2>
      <p>{decs}</p>
    </div>
  );
}