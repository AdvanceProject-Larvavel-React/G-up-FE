import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicLayout = () => {
    const role = useSelector((state) => state.auth.role);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
        if (role === 2) {
            navigate("/dashboard");
        } else if (role === 3) {
            navigate("/store");
        }
        }
    }, [role, token, navigate]);
    return <> <Outlet /> </>;
};

export default PublicLayout;