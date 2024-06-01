import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Authorization = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    authorization();
  });
  const authorization = async () => {
    const data = await axios.get("http://localhost:8000/api/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const role = data.data.data.role_id;
    if (token) {
      if (role == 2) {
        navigate("/dashboard");
      } else if (role == 1 || role == 3) {
        navigate("/");
      }
    }
  };
};
