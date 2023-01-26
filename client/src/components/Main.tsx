import React from 'react'
import '../styles/main.css'
import { IStoreProps } from '../types/types'
import Card from './Card'

const Main = ({ store, data }: IStoreProps) => {
  return (
    <section className='main'>
      <h5 className='product-number'>{data.length} products</h5>
      <section className='card-container'>
      {store.map((milk) => (
        <Card key={milk.id} milk={milk} />
      ))}
    </section>
    </section>
  )
}

export default Main
