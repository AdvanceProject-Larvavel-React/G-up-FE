import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
const PrivateLayout = ({ requiredRole }) => {
  const { token, user } = useSelector((state) => state.auth);
  if (!token) {
    return <Navigate to="/login" />;
  }
  if (requiredRole && user?.data.role_id === requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return (
    <>
      <Outlet/>
    </>
  );
};
PrivateLayout.propTypes = {
  requiredRole: PropTypes.string,
};
export default PrivateLayout;