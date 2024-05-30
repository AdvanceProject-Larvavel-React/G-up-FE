import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { status, error, token, user} = useSelector((state) => state.auth);
  if (token && user?.data.role_id === 2) {
    return <Navigate to="/dashboard" />;
  }
  else if (token && user?.data.role_id === 1) {
    return <Navigate to="/" />;
  } else if (token && user?.data.role_id === 3) {
    return <Navigate to="/store" />;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    dispatch(loginUser({ email, password }));
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      {status === "loading" && <Spin />}
      {status === "failed" && <p>{error.message}</p>}
    </div>
  );
};
export default Login;