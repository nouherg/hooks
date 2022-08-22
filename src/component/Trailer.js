import React from 'react'
import {Button } from "react-bootstrap";

const Trailer = ({ movie, }) => {
  return (
    <div>
        <Button className='button' variant="primary"
                       type="button"
                       onClick={(e) => {
                         e.preventDefault();
                         window.location.href=`${movie.trailer}`; 
                         }}> watch the trailer 
       </Button>
    </div>
  )
}

export default Trailer