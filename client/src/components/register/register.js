import './register.css'
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap"

export const RegisterPage = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRgisterContinue = () => {
    setRegistered(false);
    props.onHide();
  }
 
  const handleRegister = async() => {
    const body={
      username,
      password,
      email
    }
    const requestOptions= {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    try{
      const response= await fetch("/users/createUser", requestOptions)
      const data= await response.json();
      console.log("data", data)
      if(data.success){
        setUsername("");
        setEmail("");
        setPassword("");
        setRegistered(true);
      }else{
        document.getElementById("register-error-p").style.display= 'block';
        document.getElementById("register-error-p").innerHTML= data.message
      }
    }catch(err){
      console.log(err);
    }
  }


    return(
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Register
        </Modal.Title>
      </Modal.Header>
      {!registered && <Modal.Body>
        <Form>
            <p id="register-error-p"></p>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" className="mb-3" onChange={e=>setUsername(e.target.value )} value={username}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value )} value={email}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" onChange={e=>setPassword(e.target.value )} value={password}/>
            </Form.Group>
        </Form>
      </Modal.Body>}
      {registered && 
      <Modal.Body>
        <div className="registered-div">
          <h3>Registered successfully!</h3>
          <Button onClick={()=>handleRgisterContinue()}>Continue</Button>  
        </div>  
      </Modal.Body>}
      {!registered &&<Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button variant="primary" onClick={()=>handleRegister()}>Submit</Button>
      </Modal.Footer>}
    </Modal>
    )
}