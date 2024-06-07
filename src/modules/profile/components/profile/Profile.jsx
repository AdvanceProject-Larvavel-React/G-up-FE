import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  const [avatar, setAvatar] = useState();
  // const [storeData, setStore] = useState({});
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const userData = response.data.data;
        setUser(userData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar?.preview);
    };
  }, [avatar]);

  const handleOnchangeFileAvatar = async(e) => {
    const { name } = e.target;
    const fileAvatar = e.target.files[0];
    const formData = new FormData();
    formData.append('media', fileAvatar);
    const url = await axios.post(`http://127.0.0.1:8000/api/image/post/url`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const image= url.data.url;
    console.log("iamge la gi", image);
    await axios.put(
      `http://127.0.0.1:8000/api/user/put/update/${user?.id}`,
      { "avatar": image },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    fileAvatar.preview = URL.createObjectURL(fileAvatar);
    setAvatar(image);
    user.avatar = image;
    setUserData({ [name]: image });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setUserData({ [name]: value });
  };

  const handleUpdateInformationUser = () => {
    const updateProfileData = async () => {
      try {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/user/put/update/${user?.id}`,
          { ...userData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(`${response.data.state}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUser(response.data.user);
      } catch (error) {
        toast.error(
          `${error?.response?.data?.message}. Please validated ${
            error?.response?.data?.errors?.email
              ? error?.response?.data?.errors?.email[0]
              : ""
          } ${
            error?.response?.data?.errors?.phone
              ? `And ${error?.response?.data?.errors?.phone[0]} ${error?.response?.data?.errors?.phone[1]}`
              : ""
          }`,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );

        console.error("Error fetching profile data:", error);
      }
    };

    updateProfileData();
  };

  return (
    <div className={`${styles["profile__container"]}`}>
      <div colSpan={2} className={`${styles["profile__right"]}`}>
        <div className={`${styles["profile__right-avatar"]}`}>
          <div className={`${styles["profile__right-avatar-header"]}`}>
            <div className={`${styles["profile__avatar-img"]}`}>
              {user?.avatar ? (
                <img
                  src={user?.avatar}
                  alt=""
                  className={styles["profile__img-logo"]}
                  name="cover_img"
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
              <h3>{user?.name}</h3>
              {/* <p>Upload Photo</p> */}
            </div>
          </div>
          <div className={`${styles["profile__avatar-btn"]}`}>
            <label htmlFor="files" className="btn">
              UPDATE
            </label>
            <input
              id="files"
              style={{ visibility: "hidden" }}
              type="file"
              name="cover_img"
              onChange={handleOnchangeFileAvatar}
            />
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
              <input
                type="text"
                id="fullName"
                name="name"
                value={user?.name}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="email">Email *</label>
              <br />
              <input
                type="text"
                id="email"
                name="email"
                value={user?.email}
                onChange={handleInputChange}
              />
              <br />
            </div>
          </div>
          <div className={`${styles["profile__form-item"]}`}>
            <label htmlFor="address">Address *</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              value={user?.address}
              onChange={handleInputChange}
            />
            <br />
          </div>
          <div className={`${styles["profile__form-parent"]}`}>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="city">City *</label>
              <br />
              <input
                type="text"
                id="city"
                name="city"
                value={user?.address}
                onChange={handleInputChange}
              />
              <br />
            </div>
            <div className={`${styles["profile__form-item"]}`}>
              <label htmlFor="date">Phone *</label>
              <br />
              <input
                type="text"
                id="phone"
                name="phone"
                value={user?.phone}
                onChange={handleInputChange}
              />
              <br />
            </div>
          </div>
        </div>
        <div className={`${styles["profile__right-btn"]}`}>
          <button onClick={handleUpdateInformationUser}>
            Update Information
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
