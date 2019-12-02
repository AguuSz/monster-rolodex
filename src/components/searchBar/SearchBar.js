import React from 'react';
import './searchBar.style.css'

export const SearchBar = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)