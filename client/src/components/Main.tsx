import React from 'react'
import '../styles/main.css'
import { IStoreProps } from '../types/types'
import Card from './Card'

const Main = ({ store }: IStoreProps) => {
  return (
    <section className='main'>
      <p>{store.length} products</p>
      <section className='card-container'>
      {store.map((milk) => (
        <Card key={milk.id} milk={milk} />
      ))}
    </section>
    </section>
  )
}

export default Main
