import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
     <h1>welcome </h1> 
      <Link to="/MovieList">
      <Button className='button' variant="primary"
                       type="button"

                         > see movies
       </Button></Link>
    </div>
  )
}

export default Home