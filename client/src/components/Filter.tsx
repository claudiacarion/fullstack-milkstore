import React from 'react'
import '../styles/filter.css'

const Filter = () => {
  const milkTypes = [
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
      <select className='filter'>
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
