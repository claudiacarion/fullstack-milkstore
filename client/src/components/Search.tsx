import React from 'react'
import '../styles/search.css'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search: React.FC<Props>  = ({ onChange, value }) => {
  return (
      <div className='search'>
        <input
          type="text"
          placeholder="Search"
          onChange={ onChange }
          value={ value }
          className='search-input'
          />
    </div>
  )
}

export default Search
