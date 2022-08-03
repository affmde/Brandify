import "./helpsModal.css";
import { Container, Button, Image } from "react-bootstrap";


export const HelspsModal = (props) => {
    //solution variable used on show word tip
    const solution = props.name.replace("_", " ")
    const nbrToDivide = props.name.includes("_") ? props.name.length-1 : props.name.length;
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
            spendCoins(c)
            props.setCoins(props.coins+c)
            const actualAnswer= props.answer
            for(let i=0; i<props.name.length; i++){
                actualAnswer[i]={letter: props.name[i], index: i}
            }
            props.handleShowLetter(2);
            props.onHide();

        }else{
            document.getElementById('noMoney').style.display= 'block';
            setTimeout(()=>{
                document.getElementById('noMoney').style.display= 'none';
            }, 3000)
        }
    }
    const showLetter = (cost) => {
        if(props.coins > cost){
            spendCoins(cost)
            props.setCoins(props.coins+cost)
            const actualAnswer= props.answer
            const i= props.rand.indexOf(props.name[props.index])
            actualAnswer[props.index]={letter: props.name[props.index].toUpperCase(), index: i}
            props.handleShowLetter(1);
            props.onHide();
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
                   <Button variant="success" style={{width: '100%', margin:'2vh 0'}} onClick={()=>showLetter(-(400/(nbrToDivide-1)).toFixed(0))} id="show-letter-btn">
                        <div className="helps-button-div">
                            <p className="help-description">Show letter</p>
                            <div className="helps-btn-costDiv">
                                <Image alt="coin" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className="help-coin"></Image>
                                <p className="help-cost">{(400/(nbrToDivide-1)).toFixed(0)}</p>
                            </div>
                        </div>
                    </Button>
                    <Button variant="success" style={{width: '100%', margin:'2vh 0'}} onClick={()=>showName(-400)} id="show-word-btn">
                        <div className="helps-button-div">
                            <p className="help-description">Show complete word</p>
                            <div className="helps-btn-costDiv">
                                <Image alt="coin" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className="help-coin"></Image>
                                <p className="help-cost">400</p>
                            </div>
                        </div>
                    </Button> 
                    <p id="showName">{solution}</p>
                    <p id="noMoney">You have not enough coins</p>
                    <Button variant="danger" onClick={()=>props.onHide()} id="no-help">I don´t need help</Button>
                    <Button variant="success" onClick={()=>props.onHide()} id="understood">I got it!</Button>
                    </div>
                
        </Container>
    )
}