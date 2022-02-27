import React,{useState} from "react";
import { Alert, Button,Form } from "react-bootstrap";
import { Container, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Admin() {

  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const login = () => {
    if(email && password === "") {
       <Alert>Email and password is empty</Alert>
    } else if(email === "admin@gmail.com" && password === "12345"){
        <Link to="/"></Link>
    } 
  }

  return (
    <div>
      <h2 style={{ textAlign:"center"}}>Login</h2>
      <Container>
          <Form style={{textAlign:"center"}}>
          <TextField name="email" label="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <div />
        <TextField
          style={{ marginTop: "20px",textAlign:"center" }}
          name="password"
          label="Password"  
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <div>
        <Button onClick={login} className="btn btn-dark mt-3" style={{marginTop:'-10px'}} variant="outlined">
          Login
        </Button>
        </div>
          </Form>
      
      </Container>
    </div>
  );
}
