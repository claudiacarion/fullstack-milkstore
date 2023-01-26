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
          placeholder="enter milk name"
          onChange={ onChange }
          value={ value }
        />
        <button>Search</button>
    </div>
  )
}

export default Search
