import React from 'react';
import './pageHeader.css';

function PageHeader(){
    return(
        <header>
            <ul>
                <li className="Logo"><img src={process.env.PUBLIC_URL + "./Ascenda_Blue_Logo.jpg"} alt="Error displaying logo"></img></li>
                <li className="SignIn">Sign in</li>
                <li className="ContactUs">Contact Us</li>
                <li className="SGD"><button>SGD</button></li>
            </ul>
        
        </header>

    );

}
export default PageHeader;
