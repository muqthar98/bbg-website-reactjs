import React from 'react'
import { Link } from 'react-router-dom'
import {Container} from 'react-bootstrap'

function PageNotFound() {
  return (
      <div>
        <Container style={{justifyContent:"center",alignItems:'center',textAlign:"center"}}>
            <h5 className='mt-5' style={{textAlign:'left'}}>Go to <span><Link to='/'>Home</Link></span> Page.</h5>
            <h1 style={{fontSize:"80px"}} className="Error">404 Not Found Error.</h1>
            <p style={{fontSize:"25px"}}>Oops! Something went wrong!</p>
        </Container>
      </div>
   
  )
}

export default PageNotFound