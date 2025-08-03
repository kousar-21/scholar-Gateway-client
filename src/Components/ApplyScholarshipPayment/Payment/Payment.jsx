import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentGateway from '../PaymentGateway/PaymentGateway';




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Key);

const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentGateway></PaymentGateway>
        </Elements>
    );
};

export default Payment;