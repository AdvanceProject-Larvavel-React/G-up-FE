import styles from "./contact.module.css";
import thankYou from "../../assets/images/image 56.png";
import CardItem from "../../global-components/core/cardItem/CardItem";

export default function Contact() {
  return (
    <div className={`${styles["contact__container"]}`}>
      <div className={`${styles["contact__list"]}`}>
        <CardItem
          title="Chat Support"
          decs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, explicabo."
          text="Chat now"
        />
        <CardItem
          title="Email Support"
          decs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, explicabo."
          text="Send email"
        />
        <CardItem
          title="Help Center"
          decs="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, explicabo."
          text="Visit Help Center"
        />
      </div>
      <div className={styles["contact__content"]}>
        <div className={styles["contact__content-text"]}>
          <h2 className={styles["contact__text-heading"]}>G - UP</h2>
          <p className={styles["contact__text-decs"]}>
            We are happy and horned to answer your question. If you have any
            question or concerns about G - UP products , please contact us.
          </p>
          <p className={styles["contact__decs-email"]}>
            Email :<a href="#"> anh.pham25@student.org</a>
          </p>
          <p className={styles["contact__decs-phone"]}>
            Call : <a href="#">0902 1840847</a>
          </p>
          <img src={thankYou} alt="thank-you" />
        </div>
        <div className={styles["contact__content-form"]}>
          <div className={`${styles["contact__form-item"]}`}>
            <label htmlFor="yourEmailAddress">Your Email Address *</label>
            <br />
            <input type="text" id="yourEmailAddress" name="yourEmailAddress" />
            <br />
          </div>
          <div className={`${styles["contact__form-item"]}`}>
            <label htmlFor="subject">Subject *</label>
            <br />
            <input type="text" id="subject" name="subject" />
            <br />
          </div>
          <div className={`${styles["contact__form-item"]}`}>
            <label htmlFor="yourEmailAddress">How can we help *</label>
            <br />
            <textarea
              id="yourEmailAddress"
              name="yourEmailAddress"
              rows={4}
              cols={50}
            />

            <br />
          </div>
          <div className={`${styles["contact__form-btn"]}`}>
            <button>SEND</button>
            <p>
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
