import React from "react";
import './paymentMethod.css'

function PaymentMethod(){
    return(
        <div className="PaymentMethod">
             <div>
               <div className="radio-option">
                    <input type="radio" id="credit-card" name="payment-method" value="credit-card" />
                    <label htmlFor="credit-card">Credit/Debit Card</label>
                </div>
                <img className="Creditcard" src={process.env.PUBLIC_URL + "./images (3).png"} alt="Error displaying logo"></img> 
            </div>
            <div>
                <div className="radio-option">
                    <input type="radio" id="paynow-paylah" name="payment-method" value="paynow-paylah" />
                    <label htmlFor="paynow-paylah">PayNow/PayLah</label>
                </div>
                <img className="Paynow" src={process.env.PUBLIC_URL + "./1042574.jpeg"} alt="Error displaying logo"></img> 
            </div>
                <div className="radio-option">
                    <input type="radio" id="pay-later" name="payment-method" value="pay-later" />
                    <label htmlFor="pay-later">Pay Later</label>
                </div>
            </div>
    )
}
export default PaymentMethod;