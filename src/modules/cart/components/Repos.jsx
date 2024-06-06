import axios from "axios";
import { useEffect, useState } from "react"
import { Item } from "./Item";

export const Repos = () => {
    const token = localStorage.getItem('token');
    const [cart, setCart] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileResponse = await axios.get("http://localhost:8000/api/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const profileData = profileResponse.data.data;

                const cartResponse = await axios.get(`http://localhost:8000/api/cart/get/by-id/${profileData.id}`);
                const cart = cartResponse.data;
                setCart(cart);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [token]);
    return (
        <>
            <div className="cart-items">
                <Item key={cart.id} item={cart} />
            </div>
        </>
    )
}