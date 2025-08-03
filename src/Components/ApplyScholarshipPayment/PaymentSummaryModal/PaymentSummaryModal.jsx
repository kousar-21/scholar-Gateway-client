import React from 'react';
import { useNavigate } from 'react-router';

const PaymentSummaryModal = ({ scholarship, application, onClose, id }) => {

    const navigate = useNavigate();
    const handleProceed = () => {
        navigate(`/payment/${id}`, { state: { scholarship, application } });
    };


    return (
        <div>
            <dialog open className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl mb-2 text-center text-green-600">💳 Payment Summary</h3>
                    <p className="text-md">
                        <strong>Application Fee:</strong> ${scholarship.applicationFees}
                    </p>
                    {/*  Todo: uncomment code for better website */}
                    {/* <p className="text-md">
                        <strong>Service Charge:</strong> ${scholarship.serviceCharge}
                    </p> */}
                    {/* <p className="text-lg mt-2 font-semibold text-blue-600">
                        Total: ${Number(scholarship.applicationFees) + Number(scholarship.serviceCharge)}
                    </p> */}
                    <p className="text-lg mt-2 font-semibold text-blue-600">
                        Total: ${Number(scholarship.applicationFees)}
                    </p>

                    <div className="modal-action flex justify-between">
                        <button className="btn btn-error" onClick={onClose}>Cancel</button>
                        <button className="btn btn-success" onClick={handleProceed}>Proceed to Payment</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default PaymentSummaryModal;