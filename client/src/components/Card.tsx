import React from 'react'
import { IMilkProps } from '../types/types'
import pic from '../images/milk.png'
import '../styles/card.css'

const Card = ({ milk }: IMilkProps) => {
  return (
    <section className='card'>
      <img src={ pic } alt='milk-pic' className='milk-pic'/>
      <div className='milk-info'>
      <p className='milk-name'>{milk.name}</p>
      <p className='milk-type'>{milk.type}</p>
      </div>
    </section>
  )
}

export default Card
