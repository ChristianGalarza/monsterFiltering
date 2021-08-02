import React from 'react'

import './search-field.styles.css'

export const SearchField = ({placeholder,onSearchChange}) => (
    <input 
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={onSearchChange} 
    /> 
)
