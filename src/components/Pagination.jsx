import { Button } from 'react-bootstrap'
import React from 'react';
import '../styles/pagination.css'

const Pagination = (props) => {
    const {previousClick, nextClick, page, totalPages} = props;
  return (
    <div className='pagination align-items-center mx-auto my-5'>
        <Button variant='danger' onClick={previousClick} >Previous</Button>
        <span className='px-2'>
            Page {page} of {totalPages}
        </span>
        <Button variant='danger' onClick={nextClick}>Next</Button>
    </div>
  )
}

export default Pagination