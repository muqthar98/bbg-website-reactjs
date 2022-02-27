import React from 'react'
import { Col,Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import "./Gallery.css"

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 36px;
  color: #333;
  text-transform: uppercase;
  margin-top: 50px;
  text-align:center;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

function Gallery() {
  return (
    <div>
        <Title>Gallery</Title>
        <Container className='d-flex' style={{justifyContent:"space-between"}}>
          <Col>
              <Row sm={12} md={6} lg={4}>
              <div style={{textAlign:"center"}}>
              <img src="https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvNDJmNDQyOTMtMGRhYS00NWEwLWJlMzktOGYyNTQyZTY1ZTQ1XzEuNzI2OGQwMzFlN2FiYWY4NDk1YTVmZmQ0ODg5NWE3MTUuanBlZw.jpg" width="300px" height="300px" alt=""/> 
              <h4>Iphone 10</h4>
              </div>
              <div style={{textAlign:"center"}}>
               <img style={{marginTop:"30px"}} src="https://www.backmarket.co.uk/cdn-cgi/image/format=auto,quality=75,width=640/https://d1eh9yux7w8iql.cloudfront.net/product_images/290057_b870b7d4-1047-48ce-98dc-ccdce86f1989.jpg" width="250px" height="250px" alt=""/> 
               <h4 className='mt-3'>Iphone 11</h4>
              </div>
              <div style={{textAlign:"center"}}>
              <img src="https://m.media-amazon.com/images/I/71uuDYxn3XL.jpg" width="300px" height="300px" alt=""/> 
              <h4>Iphone 12</h4>
              </div>
              <div style={{textAlign:"center"}}>
               <img src="https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg" width="300px" height="300px" alt=""/> 
               <h4>Iphone 13</h4>
              </div>
              </Row>
              <Row sm={12} md={6} lg={4}>
              <div style={{textAlign:"center"}}>
              <img src="https://m.media-amazon.com/images/I/612byLIR+gL._SX679_.jpg" width="300px" height="300px" alt=""/> 
              <h4 className='mt-3'>OnePlus 7</h4>
              </div>
              <div style={{textAlign:"center"}}>
               <img src="https://m.media-amazon.com/images/I/71YRy9m7fVS._AC_SS450_.jpg" width="300px" height="300px" alt=""/> 
               <h4 className='mt-3'>OnePlus 8</h4>
              </div>
              <div style={{textAlign:"center"}}>
              <img src="https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg" width="300px" height="300px" alt=""/> 
              <h4 className='mt-3'>OnePlus 9</h4>
              </div>
              <div style={{textAlign:"center"}}>
               <img src="https://m.media-amazon.com/images/I/612ytK4luvL._SL1500_.jpg" width="300px" height="300px" alt=""/> 
               <h4 className='mt-3'>OnePlus 9 Pro</h4>
              </div>
              </Row>
          </Col> 
        </Container>
    </div>
  )
}

export default Gallery;