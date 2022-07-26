import "./gameView.css";
import {Container, Image, Row, Col, Button} from'react-bootstrap';
import {logosInfo} from '../logosInfo';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TopNav } from "./topNav";
import correctGif from '../media/images/correctGif.gif';
import {CountUp} from "use-count-up"
import { HelspsModal } from "./helpsModal";
import { ErrorComponent } from "./handlingComponents/Error/errorComponent";

export const GameView = (props) => {
    const navigate= useNavigate();
    const logo= props.logo;
    const level= props.level;
    const category= props.category;
    const [randomLetters, setRandomLetters] = useState([]);
    const [updateCoins, setUpdateCoins] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    let answer=[];
    let stringAnswer = "";
    
    for(let i=0; i<logo.name.length; i++){
        if(logo.name[i]!=="_"){
            answer.push({letter: null})
        }else{
            answer.push({letter: logo.name[i]})
        }
    }
    
    
    const randLetters=[];
    const createRandomLetters = () =>{
        for(let i=0; i<logo.name.length; i++){
            if(logo.name[i] !== "_"){
                randLetters.push(logo.name[i]);
            }
        }
        const nameLength= logo.name.length<5 ? 6 : 12;
        const characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        while(randLetters.length< nameLength){
            const rand= Math.floor(Math.random()*characters.length);
            randLetters.push(characters[rand]);
        }
    }

    createRandomLetters();
    
    
    const addToResponse = (e, index) => {
        if(stringAnswer.length<logo.name.length){
            const letter=  e.target.innerHTML;
            const i= checkAvailableIndex(answer)
            document.getElementById(i).innerHTML=letter;
            const updatedAnswer=answer;
            updatedAnswer[i]= {
                letter,
                index,
            };
            answer= updatedAnswer;
            stringAnswer= covertAnswerToString(answer);
            e.target.style.visibility= "hidden"
            const won= checkMatch(logo.name, stringAnswer, level, category, logo);
            if(won){
                document.getElementById("randLetters").style.display= "none";
                document.getElementById("logoName").style.display= "none";
                document.getElementById("correct-div").style.display="block";
                setUpdateCoins(true);
            }else if(!won && stringAnswer.length===logo.name.length){
                const answer= document.querySelectorAll(".letter-box");
                answer.forEach(a=>a.style.backgroundColor= "red")
                setTimeout(()=>{
                    answer.forEach(a=>a.style.backgroundColor= "transparent") 
                }, 500)
            }
        }
        
    }

    const removeLetter = (e, index) => {
        e.target.innerHTML= "";
        const indexToEdit= answer[index].index;
        stringAnswer= covertAnswerToString(answer);
        document.getElementById(`letter-${indexToEdit}`).style.visibility= "visible";
        answer[index]= {letter:null}
    }

    const continueFunction = (coins) =>{
        props.setCoins(props.coins+coins);
        coinsReward();
        addCompletedLogo();
        navigate('/logos');
    }

    useEffect(()=>{
        setRandomLetters(shuffle(randLetters));
    }, [])



    const coinsReward = async () =>{
        const body={
            coins: 15
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

    const addCompletedLogo  = async () => {
        const index= logosInfo[level][0].arrays[category].array.indexOf(logo);
        const body={
            logo: logo,
            path: {
                level,
                category,
                index
            }
        };
        const requestOptions= {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("Bearer")}` },
            body: JSON.stringify(body)
        };
        try{
            const response= await fetch("/users/addLogo", requestOptions);
            const data= await response.json();
            if(data.success===false){
                props.setLogged(false)
                props.setShowToast({
                    state: true,
                    message: data.message
                })
                
                setTimeout(()=>{
                    props.setShowToast({
                        state: false,
                        message: ""
                    })
                }, 2000)
            }
            
            
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
        <TopNav title={`Level ${level +1}`} page="logos" coins={<CountUp isCounting={updateCoins ? true : false} start={props.coins} end={props.coins+15} />}></TopNav>
        <Image alt="help" src="https://img.icons8.com/dotty/2x/help.png" id="help-button" onClick={() => setShowHelp(true)}></Image>
        <Container>
            <Row className="justify-content-center gameView-container">
                <Col xs="auto">
                    <Image alt="logo" src={logo.logoUrl} id="game-logo"/>
                </Col>
                
            
            {!showHelp && <div className='logo-name' id="logoName">
                {answer.map(( letter, i)=>{
                    return <div key={i} onClick={(e)=>removeLetter(e, i)}><div className={`letter-box ${letter.letter==="_" && "letter-hide"}`} id={i}></div></div>
                })}
            </div>}
            {!showHelp && <div className="rand-letters" id="randLetters">
                {randomLetters.map((letter, i)=>{
                    return <p onClick={(e)=>addToResponse(e, i)} key={i} className="letter-box-rand" id={`letter-${i}`}>{letter.toUpperCase()}</p>
                })}
            </div>}
            {!showHelp && <div id="correct-div">
                <div className="correct-div-flex">
                    <img alt="correct" src={correctGif} id="correct-gif"></img>
                    <Button onClick={()=>continueFunction(15)} id="continueBtn">Continue</Button>
                </div>
            </div>}

            {showHelp && <HelspsModal 
            show={showHelp}
            onHide={() => setShowHelp(false)}
            name={logo.name}
            setCoins={props.setCoins}
            coins={props.coins}
            />}
            </Row>
        </Container>
        </>
    )
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const checkAvailableIndex = (array) => {
    let index;
    for(let i= 0; i<array.length; i++){
        if(array[i].letter===null){
            index= i;
            return index;
        }
    }
  }

  const checkMatch = (target, answer, level, category, logo) =>{
    if(target.toUpperCase()===answer.toUpperCase()){
        const same= logosInfo[level][0].arrays[category].array.find(c=>c.id===logo.id);
        logosInfo[level][0].arrays[category].completedLogos.push(logo);
        same.completed=true;
        return true
    }
  }

  const covertAnswerToString = (array) =>{
    const arr= [];

    for(let i= 0; i<array.length; i++){
        arr.push(array[i].letter);
    }
    const answer= arr.join("");
    
    return answer
  }


