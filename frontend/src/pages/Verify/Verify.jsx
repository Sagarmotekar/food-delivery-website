import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useSearchParams, useNavigate } from 'react-router-dom' // Combine imports
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams(); // You don't need setSearchParams here
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    const { url } = useContext(StoreContext)
    const navigate = useNavigate();

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                // Check if we actually have params to avoid unnecessary calls
                if (!success || !orderId) {
                    navigate('/');
                    return;
                }

                const response = await axios.post(url + '/api/order/verify', { success, orderId });
                
                if (response.data.success) {
                    navigate('/myorders');
                } else {
                    navigate('/');
                }
            } catch (error) {
                console.error("Verification failed", error);
                navigate('/');
            }
        };

        verifyPayment();
    }, [success, orderId, url, navigate]); // Add dependencies so it runs when these change

    return (
        <div className='verify'>
            <div className='spinner'></div>
            <p>Verifying Payment...</p>
        </div>
    )
}

export default Verify