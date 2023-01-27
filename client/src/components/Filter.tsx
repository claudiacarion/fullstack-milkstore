import React from 'react'
import '../styles/filter.css'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

const Filter : React.FC<Props>  = ({ onChange, value })=> {

  const milkTypes = [
    '',
    'almond',
    'cashew',
    'coconut',
    'hemp',
    'macadamia',
    'oat',
    'pea',
    'rice',
    'soy',
    'walnut',
    'whole'
  ]

  return (
    <div className='filter-container'>
      <select className='filter'
                onChange={ onChange }
                value={ value }>
          {milkTypes.map(type => {
            return (
              <option value={type}> {type} </option>
            )
          })}
      </select>
    </div>
  )
}

export default Filter
