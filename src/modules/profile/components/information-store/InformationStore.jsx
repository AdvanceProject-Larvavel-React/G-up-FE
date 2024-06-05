import { useDispatch, useSelector } from "react-redux";
import styles from "./informationStore.module.css";
import { useEffect } from "react";
import { getInforStore } from "../../../../redux/features/auth/storeSlice";
import axios from "axios";

export default function InformationStore() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const userInfor = useSelector((state) => {
    return state.store.inforStore;
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userData = response.data.data;
        dispatch(getInforStore(userData));
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [dispatch]);

  return (
    <>
      {userInfor?.role?.name !== "Store Owner" ? (
        <div className={`${styles["profile__no-admin"]} `}>
          <h3>
            Bạn không phải chủ shop. Vui lòng đăng ký shop của mình{" "}
            <a href="#"> tại đây !</a>
          </h3>
        </div>
      ) : (
        <div
          colSpan={2}
          className={`${styles["profile__right"]} ${styles["profile__infor-container"]}`}
        >
          <div className={`${styles["profile__right-avatar"]}`}>
            <div className={`${styles["profile__right-avatar-header"]}`}>
              <div className={`${styles["profile__avatar-img"]}`}>
                {userInfor?.store?.avatar ? (
                  <img
                    src={userInfor?.store?.avatar}
                    alt={userInfor?.store?.name}
                    className={`${styles["profile__img-logo"]}`}
                  />
                ) : (
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
                )}
              </div>
              <div className={`${styles["profile__avatar-text"]}`}>
                <h3>{userInfor?.store?.name}</h3>
              </div>
            </div>
          </div>
          <div className={`${styles["profile__infor"]}`}>
            <h2 className={`${styles["profile__heading"]}`}>
              {" "}
              Information Owner Store{" "}
            </h2>
          </div>
          <div className={`${styles["profile__decs"]}`}>
            <p className={`${styles["profile__text"]}`}>
              Name : <span>{userInfor?.store?.name}</span>
            </p>
            <p className={`${styles["profile__text"]}`}>
              Address : <span>{userInfor?.store?.address}</span>
            </p>
            <p className={`${styles["profile__text"]}`}>
              Email : <span>{userInfor?.store?.email}</span>
            </p>
            <p className={`${styles["profile__text"]}`}>
              Description : <span>{userInfor?.role?.description}</span>
            </p>

            <p className={`${styles["profile__text"]}`}>
              Phone Number : <span>{userInfor?.store?.phone}</span>
            </p>
            <p className={`${styles["profile__text"]}`}>
              Status :{" "}
              <span>
                {
                  {
                    0: "Chưa hoạt động",
                    1: "Đang hoạt động",
                  }[userInfor?.store?.status]
                }
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}