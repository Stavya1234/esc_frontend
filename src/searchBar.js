import React from 'react';
import './searchBar.css';

function SearchBar(){
    return (
        <div className="search-container">
            <div className="search-bar">
                <input type="text" placeholder="Where to?" />
                <input type="text" placeholder="Dates" />
                <input type="text" placeholder="Travellers" />
                <button>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
