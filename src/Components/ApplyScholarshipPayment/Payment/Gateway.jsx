// import useAxiosSecure from '../../../Hooks/useAxiosSecure';
// import { useLocation, useNavigate } from 'react-router';


// const { state } = useLocation();
// const { scholarship, application } = state;
// const axiosSecure = useAxiosSecure();
// const navigate = useNavigate();



// console.log("scholarship data",scholarship)
// console.log("Application data",application)

// Todo: uncomment code for better website
// const totalAmount = Number(scholarship.applicationFees) + Number(scholarship.serviceCharge);
// const totalAmount = Number(scholarship.applicationFees)

// const handlePayment = async () => {
//     try {
//         // After successful payment
//         const res = await axiosSecure.patch(`/applications/payment/${application._id}`, {
//             paymentStatus: 'paid'
//         });

//         if (res.data.modifiedCount > 0) {
//             Swal.fire('Success!', 'Payment successful. You have applied for the scholarship!', 'success');
//             navigate('/dashboard/myApplication');
//         }
//     } catch (err) {
//         Swal.fire('Payment Failed', err.message, 'error');
//     }
// };





{/*for test case */ }
{/* <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
                <h2 className="text-2xl font-bold mb-4">Payment</h2>
                <p className="text-lg mb-2">You need to pay <span className="font-semibold text-blue-700">${totalAmount}</span></p>
                <button onClick={handlePayment} className="btn btn-primary mt-4">
                    Pay Now
                </button>
            </div> */}