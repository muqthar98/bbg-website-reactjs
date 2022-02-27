import React from "react";
import "./Home.css"
import bgImg from "../assets/bg-img.jpg"
import NavBar from "./NavBar";
import styled from "styled-components";
import { Row,Col } from "react-bootstrap";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-size: 82px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
  position: absolute;
  top:50%;  
  left:50%;
  transform:translate(-50%,-50%);
`;

const Footer = styled.footer`
  text-align:center;
`;

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="section">
      <Row>
        <Col sm={12} md={6} lg={3}>
        <img className="bg-img" src={bgImg} alt=""/> 
        <Title>READY TO EXPLORE</Title>
        </Col>
      </Row>
      </div>
      <Gallery/>
      <hr/>
      <Contact/>
      <Footer>© Copyrights 2022. All Rights Reserved.</Footer>
    </div>
  );
}
