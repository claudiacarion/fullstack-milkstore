import React from 'react'
import '../styles/main.css'
import { IStoreProps } from '../types/types'
import Card from './Card'

const Main = ({ store }: IStoreProps) => {
  return (
    <section className='main'>
      <p>here goes the milk</p>
      <Card />
    </section>
  )
}

export default Main
