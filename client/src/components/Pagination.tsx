import React from 'react'
import { IPageProps } from '../types/types';
import '../styles/pagination.css'

const Pagination = ({totalMilk, milkPerPage, paginate}: IPageProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMilk / milkPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='pagination'>
      <ul className='pagination-list'>
        {pageNumbers.map(number => (
          <a href='!#'><li key={number} className='pagination-item' onClick={()=> paginate(number)}>
            {number}</li></a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
