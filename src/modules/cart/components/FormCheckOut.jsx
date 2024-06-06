import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import styles from "../styles/FormCheckOut.module.css";
import { Repos } from "./Repos";
import Header from "../../../global-components/core/headers/Header";
import Footer from "../../../global-components/core/footers/Footer";

export const FormCheckOut = () => {
    const [promoCode, setPromoCode] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(15);
    const [deliveryMethod, setDeliveryMethod] = useState('Fast');
    const [subtotal, setSubtotal] = useState(localStorage.getItem('total'));
    const [shippingCost, setShippingCost] = useState(30);

    const totalBeforeDiscount = useMemo(() => subtotal + shippingCost, [subtotal, shippingCost]);
    const totalAfterDiscount = useMemo(() => {
        const discountAmount = totalBeforeDiscount * (discountPercentage / 100);
        return (totalBeforeDiscount - discountAmount).toFixed(2);
    }, [totalBeforeDiscount, discountPercentage]);

    useEffect(() => {
        if (deliveryMethod === 'Fast') {
            setShippingCost(30);
        } else if (deliveryMethod === 'Normal') {
            setShippingCost(15);
        }
    }, [deliveryMethod]);

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handleDiscountPercentageChange = (percentage) => {
        setDiscountPercentage(percentage);
    };

    const handleDeliveryMethodChange = (method) => {
        setDeliveryMethod(method);
    };

    const updateSubtotal = (newSubtotal) => {
        setSubtotal(newSubtotal);
    };
    updateSubtotal;
    const processPayment = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/gateway/momo/pay',
                {
                    user_name: "Hihi",
                    amount: subtotal
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );
            window.location.assign(response.data);
        } catch (error) {
            console.error('Error processing payment:', error);
        }
    };

    return (
        <>
            <Header/>
            <Repos/>
            <div className={styles.shoppingCheckout}>
                <div className={styles.summary}>
                    <div className={styles.section}>
                        <h3>SUBTOTAL</h3>
                        <p>${subtotal}</p>
                    </div>
                    <div className={styles.section}>
                        <h3>ESTIMATED SHIPPING</h3>
                        <p>${shippingCost}</p>
                    </div>
                    <hr />
                    <div className={styles.section}>
                        <h3>Voucher of shop</h3>
                        <div className={styles.discountOptions}>
                            <button
                                className={`${styles.discountOption} ${discountPercentage === 15 ? styles.active : ''}`}
                                onClick={() => handleDiscountPercentageChange(15)}
                            >
                                15%
                            </button>
                            <button
                                className={`${styles.discountOption} ${discountPercentage === 20 ? styles.active : ''}`}
                                onClick={() => handleDiscountPercentageChange(20)}
                            >
                                20%
                            </button>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h3>Add A Your Promo Code</h3>
                        <input
                            type="text"
                            placeholder="Add A Your Promo Code"
                            value={promoCode}
                            onChange={handlePromoCodeChange}
                        />
                    </div>
                    <div className={styles.section}>
                        <h3>Delivery Method</h3>
                        <hr />
                        <div className={styles.deliveryOptions}>
                            <button
                                className={`${styles.deliveryOption} ${deliveryMethod === 'Fast' ? styles.active : ''}`}
                                onClick={() => handleDeliveryMethodChange('Fast')}
                            >
                                Fast (30k)
                            </button>
                            <button
                                className={`${styles.deliveryOption} ${deliveryMethod === 'Normal' ? styles.active : ''}`}
                                onClick={() => handleDeliveryMethodChange('Normal')}
                            >
                                Normal (15k)
                            </button>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <h3>ESTIMATED TOTAL</h3>
                        <p>${totalAfterDiscount }</p>
                    </div>
                </div>

                <div className={styles.paymentOptions}>
                    <button className={styles.paymentOption} onClick={processPayment}>MOMO PAY</button>
                    <button className={styles.paymentOption}>PICK UP DIRECTLY</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};
