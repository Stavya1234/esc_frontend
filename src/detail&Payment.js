import React from 'react';
import PageHeader from './pageHeader.js';
import CurrentPage from './currentPage.js';
import HotelBooking from './BookingDetails/hotelBooking.js';
import HotelDetails from './BookingDetails/hotelDetails.js';
import PriceCalculation from './BookingDetails/priceCalculation.js';
import './detail&Payment.css';

function DetailPayment(){
    return(
        <>
        <PageHeader/>
        <CurrentPage/>
        <HotelBooking className='HotelBooking'/>
        <HotelDetails className='HotelDetails'/>
        <PriceCalculation className='PriceCalculation'/> 
        </>
    )
}
export default DetailPayment;