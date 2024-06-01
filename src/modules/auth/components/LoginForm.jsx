import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { status, error} = useSelector((state) => state.auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    dispatch(loginUser({ email, password }));
  };
  return (
    <div>
      <Link to="/auth/sign-up">sign up</Link>
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
export default LoginForm;