
import styles from "./profile.module.css";
// import ProfileDetailItem from "./ProfileDetailItem/ProfileDetailItem";

export default function Profile() {
  return (
    <div className={`${styles["profile__container"]}`}>
      {/* <div colSpan={1} className={`${styles["profile__left"]}`}>
        <div className={`${styles["profile__left-list"]}`}>
          <ProfileDetailItem
            title={"Account Setting"}
            decs={"Detail About Your Personal Information"}
          />
          <ProfileDetailItem
            title={"Notification"}
            decs={"Detail About Your Personal Information"}
          />

          <ProfileDetailItem
            title={"Membership Plan"}
            decs={"Detail About Your Personal Information"}
          />
          <ProfileDetailItem
            title={"Password And Security"}
            decs={"Detail About Your Personal Information"}
          />
        </div>
      </div> */}

      <div colSpan={2} className={`${styles["profile__right"]}`}>
        <div className={`${styles["profile__right-avatar"]}`}>
          <div className={`${styles["profile__right-avatar-header"]}`}>
            <div className={`${styles["profile__avatar-img"]}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${styles["profile__img-logo"]}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div className={`${styles["profile__avatar-text"]}`}>
              <h3>Lan Anh</h3>
              <p>Upload Photo</p>
            </div>
          </div>
          <div className={`${styles["profile__avatar-btn"]}`}>
            <label htmlFor="files" className="btn">
              UPDATE
            </label>
            <input id="files" style={{ visibility: "hidden" }} type="file" />
          </div>
        </div>
        <div className={`${styles["profile__right-title"]}`}>
          <h2>Change User Information</h2>
        </div>
        <div className={`${styles["profile__right-form"]}`}>
          <div className={`${styles["profile__form-parent"]}`}>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="fullName">Full Name *</label>
              <br />
              <input type="text" id="fullName" name="fullName" />
              <br />
            </div>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="email">Email *</label>
              <br />
              <input type="text" id="email" name="email" />
              <br />
            </div>
          </div>
          <div className={`${styles["profile__form-item"]}`}>
            <label htmlFor="address">Address *</label>
            <br />
            <input type="text" id="address" name="address" />
            <br />
          </div>
          <div className={`${styles["profile__form-parent"]}`}>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="city">City *</label>
              <br />
              <input type="text" id="city" name="city" />
              <br />
            </div>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="date">Date *</label>
              <br />
              <input type="text" id="date" name="date" />
              <br />
            </div>
          </div>
        </div>
        <div className={`${styles["profile__right-btn"]}`}>
          <button>Update Information</button>
        </div>
      </div>
    </div>
  );
}
