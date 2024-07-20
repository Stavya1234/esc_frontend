import React from "react";
import DetailPayment from "./detail&Payment";
import PaymentMethod from "./BookingDetails/paymentMethod";

function PaymentPage(){
    return(
        <>
        <DetailPayment/>
        <div className="Payment Container">
            <PaymentMethod/>
        </div>
        </>
    )
}

export default PaymentPage;

