import React from 'react'
import '../styles/main.css'
import { IStoreProps } from '../types/types'
import pic from '../images/milk.png'

const Main = ({ store, data }: IStoreProps) => {
  return (
    <section className='main'>
      <h5 className='product-number'>{data.length} products</h5>
      <section className='card-container'>
      {store.map((milk) => (
            <section className='card'>
            <img src={ pic } alt='milk-pic' className='milk-pic'/>
            <div className='milk-info'>
            <p className='milk-name'>{milk.name}</p>
            <div className='milk-details'>
            <p className='milk-type'>{milk.type}</p>
            <p className='milk-storage'>{milk.storage} liters</p>
            </div>
            </div>
          </section>
      ))}
    </section>
    </section>
  )
}

export default Main
