import "./helpsModal.css";
import { Container, Modal, Button, Image } from "react-bootstrap"

export const HelspsModal = (props) => {
    
    const spendCoins = async (c) =>{
        const body={
            coins: c
        }
        const requestOptions= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("Bearer")}` },
            body: JSON.stringify(body)
        }
        try{
            await fetch("/users/coins", requestOptions);
            
        }catch(err){
            console.log(err)
        }
    }
    const showName = (c) => {
        document.getElementById('showName').style.display= 'block';
        document.getElementById('show-word-btn').style.display= "none";
        document.getElementById('helps-title').style.display= "none";
        spendCoins(c)
        props.setCoins(props.coins + c);
    }
    return(
        <Container>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="helps-div">
                   <p style={{fontSize: '2rem'}} id="helps-title">Do you need help?</p>
                    <Button variant="success" style={{width: '100%', margin:'2vh 0'}} onClick={()=>showName(-400)} id="show-word-btn">
                        <div className="helps-button-div">
                            <p className="help-description">Show word</p>
                            <div className="helps-btn-costDiv">
                                <Image alt="coin" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className="help-coin"></Image>
                                <p className="help-cost">400</p>
                            </div>
                        </div>
                    </Button> 
                    <p id="showName">{props.name} </p>
                    </div>
                </Modal.Body>
                
            </Modal>
        </Container>
    )
}