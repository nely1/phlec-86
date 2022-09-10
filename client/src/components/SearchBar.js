import React from 'react';

import './SearchBar.css'

export default function SearchBar() {

    return (
        <div className="exploreSearch">
        <form id="exploreSearch">
        <input type="text" id="search" />
        <input className="styledButton untoggledButton" type="submit" value="Search" />
        </form>
        </div>
    )
}
