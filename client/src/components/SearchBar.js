import React from "react";

import "./SearchBar.css";

export default function SearchBar(props) {
  return (
    <div className="exploreSearch">
      <form id="exploreSearch">
        <input
          type="search"
          id="search"
          placeholder="Search... "
          onChange={props.onChange}
        />
      </form>
    </div>
  );
}
