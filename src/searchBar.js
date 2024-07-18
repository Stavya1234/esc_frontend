import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendarDay, faUser } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import './searchBar.css';

function SearchBar(){
    const [startDate, setStartDate] = useState(null);

    return (
        <div className="search-container">
            <div className="search-bar">
                <div className="input-icon-container">
                    <FontAwesomeIcon icon={faLocationDot} className="input-icon" />
                    <input type="text" placeholder="Where to?" className="input-field"/>
                </div>
                <div className="input-icon-container">
                    <FontAwesomeIcon icon={faCalendarDay} className="input-icon" />
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Dates"
                        className="input-field date-picker-input"
                    />
                </div>
                <div className="input-icon-container">
                    <FontAwesomeIcon icon={faUser} className="input-icon" />
                    <input type="text" placeholder="Travellers" className="input-field"/>
                </div>
                <button className="search-button">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
