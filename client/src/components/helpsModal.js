import "./helpsModal.css";
import { Container, Button, Image } from "react-bootstrap"

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
        
        if(props.coins > 400){
            document.getElementById('showName').style.display= 'block';
            document.getElementById('show-word-btn').style.display= "none";
            document.getElementById('helps-title').style.display= "none";
            document.getElementById("no-help").style.display= "none";
            document.getElementById("understood").style.display= "block"
            spendCoins(c)
            props.setCoins(props.coins+c)
        }else{
            document.getElementById('noMoney').style.display= 'block';
            setTimeout(()=>{
                document.getElementById('noMoney').style.display= 'none';
            }, 3000)
        }
        
    }
    return(
        <Container>
                
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
                    <p id="noMoney">You have not enough coins</p>
                    <Button variant="danger" onClick={()=>props.onHide()} id="no-help">I don´t need help</Button>
                    <Button variant="success" onClick={()=>props.onHide()} id="understood">I got it!</Button>
                    </div>
                
        </Container>
    )
}