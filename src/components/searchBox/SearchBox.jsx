import React from 'react'
import './searchBox.styles.css'

export const SearchBox = ({ handleChange }) => {
  return (
    <input
      className="search"
      onChange={handleChange}
      type="search"
      placeholder="search monsters"
    />
  )
}
