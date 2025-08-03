import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate, useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Spinner/Spinner';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';

const PaymentGateway = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [isPaymentComplete, setIsPaymentComplete] = useState(false);
    console.log("scholarship data in gateway page", id)
    // stripe part
    const stripe = useStripe();
    const elements = useElements();

    const axiosSecure = useAxiosSecure();

    const { data: application = [], isLoading } = useQuery({
        queryKey: ['unpaidApplication', user?.email, id],
        enabled: !!user?.email && !!id,
        queryFn: async () => {
            const res = await axiosSecure.get('/applications/unpaid', {
                params: {
                    email: user.email,
                    scholarshipId: id
                }
            });
            return res.data;
        }
    });

    if (isLoading) {
        return <Spinner></Spinner>;
    }

    console.log("getting applications/shorlarship-id", application)
    const amount = application.payment_amount;
    const amountInCents = parseInt(amount * 100);
    console.log(amountInCents)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if (error) {
            // console.log('payment intent error', error);
            setError(error.message)
            toast.error(error.message)
        } else {
            setError('')
            console.log('PaymentMethod', paymentMethod);


            //payment intent part
            const resAmount = await axiosSecure.post('/create-payment-intent', {
                amount: amountInCents,
                scholarshipId: id
            })
            console.log(resAmount)
            const clientSecret = resAmount.data.clientSecret;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,

                    }

                }
            })


            if (result.error) {
                // console.log(result.error.message)
                setError(result.error.message)
                toast.error(result.error.message)
            }
            else {
                setError('')
                if (result.paymentIntent.status === "succeeded") {
                    console.log("payment successfully completed")
                    console.log("result", result)

                    const updateRes = await axiosSecure.post('/payment', {
                        transaction_id: result.paymentIntent.id,
                        scholarshipId: application.scholarshipId,
                        userId: application.user_Id,
                        amount: application.payment_amount,
                        paymentStatus: 'paid',
                        method: "stripe"
                    })
                    console.log("updated payment data", updateRes)
                    if (updateRes.data.message) {
                        Swal.fire('Success', updateRes.data.message, 'success');
                        setIsPaymentComplete(true)
                    }

                    // navigate to my application page
                    navigate('/dashboardLayout/my-applications')
                }
            }

        }


    }


    return (
        <div className='py-10 px-10'>
            <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
                <h2 className="text-lg font-bold mb-4 text-center text-blue-600">Complete Your Payment</h2>

                <form onSubmit={handleSubmit}>
                    <CardElement className="border p-2 mb-4 rounded"></CardElement>

                    <button type="submit" className="btn btn-primary disabled:opacity-70 disabled:cursor-not-allowed border-none hover:bg-orange-500 text-white w-full" disabled={!stripe || isPaymentComplete}>
                        Pay Now  ${amount}
                    </button>

                </form>
                {
                    error && <p className='text-red-500 text-sm'>{error}</p>
                }
            </div>

        </div>
    );
};

export default PaymentGateway;