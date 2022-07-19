import "./homepage.css";
import { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { RegisterPage } from "./register/register";
import { useNavigate } from "react-router-dom";
import './login.css';

export const HomePage= (props) => {
    const [modalShow, setModalShow] =useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate= useNavigate();

    const handleLogin = async () => {
        const body={
          username,
          password
        }
        const requestOptions= {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
      }
        const response= await fetch("http://localhost:3001/users/login", requestOptions);
        const data= await response.json();
        
        if(data.token){
          setPassword("");
          setUsername("");
          localStorage.setItem("Bearer", data.token);
          props.setLogged(true);
          navigate('/levels')
        }else{
          setPassword("");
          setUsername("");
          document.getElementById("wrong-login").style.display= "block"
        }
      }
    
    if(modalShow){
        return(
            <Container fluid className="login-form">
                <h2 style={{textAlign: 'center', fontSize: '3rem'}}>Login</h2>
                <Form style={{marginTop: '15vh'}}>
                    <p id="wrong-login">Wrong username or password</p>
                    <Form.Group className="mb-3" controlId="formBasicUsername" >
                        <Form.Label className="login-label">Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" className="mb-3 login-control" onChange={e=>setUsername(e.target.value )} value={username}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="login-label">Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" onChange={e=>setPassword(e.target.value )} value={password} className="login-control"/>
                    </Form.Group>
                </Form>
               <Row>
                <div className="login-btns-div">
                    <Button variant="primary" onClick={()=>handleLogin()} id="login-btn-submit">Submit</Button>
                    <Button onClick={()=>setModalShow(false)} id="login-btn-cancel">Cancel</Button>
                </div>
                </Row> 
            </Container>
            
        )
    }

    return(
        <div>
        <Container fluid>
            <Row>
                <h1 className="homepage-title">Brandify</h1>
                <h2 className="subtitle">Your logo's game</h2>
            </Row>
            <Row className="justify-content-center">
                <Col xs="auto"><Button onClick={() => setModalShow(true)} className="homepage-links">Login</Button></Col>
                <Col xs="auto"><Button className="homepage-links" onClick={() => setRegisterModal(true)}>Register</Button></Col>
            </Row>
        </Container>
        <RegisterPage 
            show={registerModal}
            onHide={() => setRegisterModal(false)}
        />
        </div>
    )
}