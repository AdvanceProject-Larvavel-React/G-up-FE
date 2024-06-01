import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "../redux/features/auth/authSlice";
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initializeAuth = async () => {
            const accessToken = localStorage.getItem("token");
            if (!accessToken) {
                dispatch(setInitialState({ isAuthenticated: false, role: null }));
                return;
            }
            
            try {
                const response = await axios.get('http://localhost:8000/api/profile', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                
                const { role_id } = response.data.data;
                dispatch(setInitialState({ isAuthenticated: true, role: role_id }));
            } catch (error) {
                console.error("Error fetching user data:", error);
                dispatch(setInitialState({ isAuthenticated: false, role: null }));
            }
        };

        initializeAuth();
    }, [dispatch]);

    return <>{children}</>;
};