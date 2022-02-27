import React,{useState} from "react";
import styled from "styled-components";
import './Contact.css';
import {Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userRegister } from "../redux/actions/userActions";

const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  font-size: 36px;
  color: #333;
  text-align:center;
  text-transform: uppercase;
  margin-top: 50px;
  margin-bottom: 15px;
`;

const Title1 = styled.h1`
font-family: 'Raleway', sans-serif;
color: white;
margin-top: 100px;
font-weight: 700;
text-align:center;
text-transform: uppercase;
padding-top: 20px;
`;

export default function Contact() {

  const dispatch = useDispatch();

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[message,setMessage] = useState("")

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      userRegister(name,email,message)
    )
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div>
      <Title>Contact</Title>
      <div className="section" style={{background:"#00B4D8"}}>
      <Title1>Get in Touch</Title1>
      <p className="mt-4" style={{color:"white",textAlign:"center"}}>Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
      <form className="col-md-6" style={{ width: "300px",margin: "0 auto"}} >
        <input placeholder="Name" style={{width:"300px",padding:"5px"}} value={name} onChange={(e)=>setName(e.target.value)} required/>
        <div/>
        <input placeholder="Email" style={{width:"300px",marginTop:"20px",padding:"5px"}} value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <div/>
        <textarea placeholder="Message" style={{marginTop:"20px",width:"300px"}} value={message} onChange={(e)=>setMessage(e.target.value)} required/>
        <div/>
        {
          name || email || message ? <Button className="btn btn-lg mt-3 submit_btn" onClick={submit} style={{borderRadius:"25px",borderColor:"white",textTransform:"uppercase",marginBottom:"50px"}} >Submit</Button> :
          <Button disabled className="mt-3" style={{borderRadius:"25px",borderColor:"white",textTransform:"uppercase",marginBottom:"50px"}}>Submit</Button>
        }
      </form>
      </div>
    </div>
  )
}
