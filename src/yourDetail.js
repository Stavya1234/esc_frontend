import React from "react";
import DetailPayment from "./detail&Payment";
import CustomerDetail from "./BookingDetails/customerDetail";
import "./yourDetail.css";

function YourDetail(){
    return(
        <>
        <DetailPayment/>
        <CustomerDetail/>
        <img className="tick" src={process.env.PUBLIC_URL + "./tick-icon-transparent-free-png.webp"} alt="Error displaying logo"></img>
        <h1 className="two">2</h1>
        <h1 className="three">3</h1>
        </>
    )
}

export default YourDetail;