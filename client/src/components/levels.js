import './levels.css';
import { useState} from 'react';
import { Button, Container, Row, Col, Image} from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import { logosInfo } from "../logosInfo";
import { useEffect } from 'react';
import { ErrorComponent } from './handlingComponents/Error/errorComponent';
import { LoadingComponent } from './handlingComponents/Loading/loadingComponent';
import router from '../handelRouters';
import { createParticles } from "./particle";

export const LevelsPage = (props) => {
    const [totalLogos, setTotalLogos] = useState(0);
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [totalPercent, setTotalPercent] = useState(0);
    const [error, setError] = useState({
        state: false,
        message: ""
    });
    const [level1, setLevel1] = useState(null);
    const [level2, setLevel2] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level3, setLevel3] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level4, setLevel4] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level5, setLevel5] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level6, setLevel6] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level7, setLevel7] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level8, setLevel8] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const [level9, setLevel9] = useState({
        totalLogos: 0,
        completedLogos: 0,
        percenCompleted: 0,
        open: false
    });
    const[totalRedeem, setTotalRedeem] = useState(0);
    
    const navigate= useNavigate();

    const chooseLevel = (i) => {
        props.setLevel(i);
        navigate("/categories")
    }

    const loadUserData = async() =>{
        const requestOptions= {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("Bearer")}` },
        }
        const response = await fetch("/users/user", requestOptions );
        const data= await response.json();
        if(data.err){
            return setError({...error, state: true, message: data.message});
            
        }
        props.setCoins(data.coins);

        //set redeem levels
        data.redeemedLevel.forEach(lvl=>{
            logosInfo[lvl.level][0].redeem=true
        })
        

        //set redeemed categories
        data.redeemedCategories.forEach(category=>{
            logosInfo[category.path.level][0].arrays[category.path.category].redeem=true;
        })

        //set completed logos as completed in the general data
        for(let i=0; i<data.completedLogos.length; i++){
            const path= data.completedLogos[i].path;
            logosInfo[path.level][0].arrays[path.category].array[path.index].completed=true;
        }

        //set all completed logos by level
        const lvl1=[];
        const lvl2= [];
        const lvl3= [];
        const lvl4= [];
        const lvl5=[];
        const lvl6=[];
        const lvl7=[];
        const lvl8=[];
        const lvl9=[];
        data.completedLogos.forEach((obj, i)=>{
            if(obj.path.level===0){
                lvl1.push(obj)
            }else if(obj.path.level===1){
                lvl2.push(obj)
            }else if(obj.path.level===2){
                lvl3.push(obj)
            }else if(obj.path.level===3){
                lvl4.push(obj)
            }else if(obj.path.level===4){
                lvl5.push(obj)
            }else if(obj.path.level===5){
                lvl6.push(obj)
            }else if(obj.path.level===6){
                lvl7.push(obj)
            }else if(obj.path.level===7){
                lvl8.push(obj)
            }else if(obj.path.level===8){
                lvl9.push(obj)
            }
        })
        
        //Level 1 data
        const level1TotalLogos= logosInfo[0][0].arrays[0].array.length + logosInfo[0][0].arrays[1].array.length + logosInfo[0][0].arrays[2].array.length + logosInfo[0][0].arrays[3].array.length + logosInfo[0][0].arrays[4].array.length + logosInfo[0][0].arrays[5].array.length +logosInfo[0][0].arrays[6].array.length
        const level1PercentCompleted= (lvl1.length / level1TotalLogos * 100);
        if(level1PercentCompleted>60){
            logosInfo[1][0].open=true
        }
        if(level1PercentCompleted>=100){
            logosInfo[0][0].completed=true;
        }
        const l1brands=[];
        const l1clubs=[];
        const l1countries=[];
        const l1foods= [];
        const l1animals= [];
        const l1capitals=[];
        const l1people=[];
        setLevelData(lvl1,l1brands, l1clubs, l1countries, l1foods, l1animals, l1capitals, l1people, 0);
        
        setLevel1({...level1,
            totalLogos: level1TotalLogos,
            completedLogos: lvl1.length,
            percenCompleted: level1PercentCompleted,
        })
        

        //Level 2 data
        const level2TotalLogos= logosInfo[1][0].arrays[0].array.length + logosInfo[1][0].arrays[1].array.length + logosInfo[1][0].arrays[2].array.length + logosInfo[1][0].arrays[3].array.length + logosInfo[1][0].arrays[4].array.length + logosInfo[1][0].arrays[5].array.length + logosInfo[1][0].arrays[6].array.length;
        const level2PercentCompleted= (lvl2.length / level2TotalLogos *100);

        if(level2PercentCompleted>=100){
            logosInfo[1][0].completed=true;
        }

        const l2brands=[];
        const l2clubs=[];
        const l2countries=[];
        const l2foods= [];
        const l2animals=[];
        const l2capitals=[];
        const l2people=[];
        setLevelData(lvl2,l2brands, l2clubs, l2countries, l2foods, l2animals, l2capitals, l2people, 1);
        setLevel2({...level2,
            totalLogos: level2TotalLogos,
            completedLogos: lvl2.length,
            percenCompleted: level2PercentCompleted,
        })
        
        // set level 3 data
        const level3TotalLogos= logosInfo[2][0].arrays[0].array.length + logosInfo[2][0].arrays[1].array.length + logosInfo[2][0].arrays[2].array.length + logosInfo[2][0].arrays[3].array.length + logosInfo[2][0].arrays[4].array.length + logosInfo[2][0].arrays[5].array.length + logosInfo[2][0].arrays[6].array.length;
        const level3PercentCompleted= (lvl3.length / level3TotalLogos * 100);
        if(level2PercentCompleted>60){
            logosInfo[2][0].open=true
        }
        if(level3PercentCompleted>=100){
            logosInfo[2][0].completed=true;
        }
        const l3brands=[];
        const l3clubs=[];
        const l3countries=[];
        const l3foods= [];
        const l3animals= [];
        const l3capitals=[];
        const l3people=[];
        setLevelData(lvl3,l3brands, l3clubs, l3countries, l3foods, l3animals, l3capitals, l3people, 2);
        
        setLevel3({...level3,
            totalLogos: level3TotalLogos,
            completedLogos: lvl3.length,
            percenCompleted: level3PercentCompleted,
        })


        //set level 4 data
        const level4TotalLogos= logosInfo[3][0].arrays[0].array.length + logosInfo[3][0].arrays[1].array.length + logosInfo[3][0].arrays[2].array.length + logosInfo[3][0].arrays[3].array.length + logosInfo[3][0].arrays[4].array.length + logosInfo[3][0].arrays[5].array.length + logosInfo[3][0].arrays[6].array.length;
        const level4PercentCompleted= (lvl4.length / level4TotalLogos * 100);
        if(level3PercentCompleted>60){
            logosInfo[3][0].open=true
        }
        if(level4PercentCompleted>=100){
            logosInfo[3][0].completed=true;
        }
        const l4brands=[];
        const l4clubs=[];
        const l4countries=[];
        const l4foods= [];
        const l4animals=[];
        const l4capitals=[];
        const l4people=[];
        setLevelData(lvl4,l4brands, l4clubs, l4countries, l4foods, l4animals, l4capitals, l4people, 3);

        setLevel4({...level4,
            totalLogos: level4TotalLogos,
            completedLogos: lvl4.length,
            percenCompleted: level4PercentCompleted,
        })

        //Set level 5 data
        const level5TotalLogos= logosInfo[4][0].arrays[0].array.length + logosInfo[4][0].arrays[1].array.length + logosInfo[4][0].arrays[2].array.length + logosInfo[4][0].arrays[3].array.length + logosInfo[4][0].arrays[4].array.length + logosInfo[4][0].arrays[5].array.length + logosInfo[4][0].arrays[6].array.length;
        const level5PercentCompleted= (lvl5.length / level5TotalLogos * 100);
        if(level4PercentCompleted>60){
            logosInfo[4][0].open=true
        }
        if(level5PercentCompleted>=100){
            logosInfo[4][0].completed=true;
        }
        const l5brands=[];
        const l5clubs=[];
        const l5countries=[];
        const l5foods= [];
        const l5animals=[];
        const l5capitals=[];
        const l5people=[];
        setLevelData(lvl5,l5brands, l5clubs, l5countries, l5foods, l5animals, l5capitals, l5people, 4);

        setLevel5({...level5,
            totalLogos: level5TotalLogos,
            completedLogos: lvl5.length,
            percenCompleted: level5PercentCompleted,
        })

        //set level 6 data
        const level6TotalLogos= logosInfo[5][0].arrays[0].array.length + logosInfo[5][0].arrays[1].array.length + logosInfo[5][0].arrays[2].array.length + logosInfo[5][0].arrays[3].array.length + logosInfo[5][0].arrays[4].array.length + logosInfo[5][0].arrays[5].array.length + logosInfo[5][0].arrays[6].array.length;
        const level6PercentCompleted= (lvl6.length / level6TotalLogos * 100);
        if(level5PercentCompleted>60){
            logosInfo[5][0].open=true
        }
        if(level6PercentCompleted>=100){
            logosInfo[5][0].completed=true;
        }
        const l6brands=[];
        const l6clubs=[];
        const l6countries=[];
        const l6foods=[];
        const l6animals=[];
        const l6capitals=[];
        const l6people=[];
        setLevelData(lvl6,l6brands, l6clubs, l6countries, l6foods, l6animals, l6capitals, l6people, 5);
        
        setLevel6({...level6,
            totalLogos: level6TotalLogos,
            completedLogos: lvl6.length,
            percenCompleted: level6PercentCompleted,
        })

        //set level 7 data
        const level7TotalLogos= logosInfo[6][0].arrays[0].array.length + logosInfo[6][0].arrays[1].array.length + logosInfo[6][0].arrays[2].array.length + logosInfo[6][0].arrays[3].array.length + logosInfo[6][0].arrays[4].array.length + logosInfo[6][0].arrays[5].array.length + logosInfo[6][0].arrays[6].array.length;
        const level7PercentCompleted= (lvl7.length / level7TotalLogos * 100);
        if(level6PercentCompleted>60){
            logosInfo[6][0].open=true
        }
        if(level7PercentCompleted>=100){
            logosInfo[6][0].completed=true;
        }
        const l7brands=[];
        const l7clubs=[];
        const l7countries=[];
        const l7foods=[];
        const l7animals=[];
        const l7capitals=[];
        const l7people=[];
        setLevelData(lvl7,l7brands, l7clubs, l7countries, l7foods, l7animals, l7capitals, l7people, 6);
        
        setLevel7({...level7,
            totalLogos: level7TotalLogos,
            completedLogos: lvl7.length,
            percenCompleted: level7PercentCompleted,
        })

        //set level 8 data
        const level8TotalLogos= logosInfo[7][0].arrays[0].array.length + logosInfo[7][0].arrays[1].array.length + logosInfo[7][0].arrays[2].array.length + logosInfo[7][0].arrays[3].array.length + logosInfo[7][0].arrays[4].array.length + logosInfo[7][0].arrays[5].array.length + logosInfo[7][0].arrays[6].array.length;
        const level8PercentCompleted= (lvl8.length / level8TotalLogos * 100);
        if(level7PercentCompleted>60){
            logosInfo[7][0].open=true
        }
        if(level8PercentCompleted>=100){
            logosInfo[7][0].completed=true;
        }
        const l8brands=[];
        const l8clubs=[];
        const l8countries=[];
        const l8foods=[];
        const l8animals=[];
        const l8capitals=[];
        const l8people=[];
        setLevelData(lvl8,l8brands, l8clubs, l8countries, l8foods, l8animals, l8capitals, l8people, 7);
        
        setLevel8({...level8,
            totalLogos: level8TotalLogos,
            completedLogos: lvl8.length,
            percenCompleted: level8PercentCompleted,
        })
        //set level 9 data
        const level9TotalLogos= logosInfo[8][0].arrays[0].array.length + logosInfo[8][0].arrays[1].array.length + logosInfo[8][0].arrays[2].array.length + logosInfo[8][0].arrays[3].array.length + logosInfo[8][0].arrays[4].array.length + logosInfo[8][0].arrays[5].array.length + logosInfo[8][0].arrays[6].array.length;
        const level9PercentCompleted= (lvl9.length / level9TotalLogos * 100);
        if(level8PercentCompleted>60){
            logosInfo[8][0].open=true
        }
        if(level9PercentCompleted>=100){
            logosInfo[8][0].completed=true;
        }
        const l9brands=[];
        const l9clubs=[];
        const l9countries=[];
        const l9foods=[];
        const l9animals=[];
        const l9capitals=[];
        const l9people=[];
        setLevelData(lvl9,l9brands, l9clubs, l9countries, l9foods, l9animals, l9capitals, l9people, 8);
        
        setLevel9({...level9,
            totalLogos: level9TotalLogos,
            completedLogos: lvl9.length,
            percenCompleted: level9PercentCompleted,
        })

        //Total data stats
        setTotalCompleted(lvl1.length + lvl2.length + lvl3.length + lvl4.length+lvl5.length+lvl6.length+lvl7.length+lvl8.length+lvl9.length);
        setTotalLogos( level1TotalLogos + level2TotalLogos + level3TotalLogos + level4TotalLogos+level5TotalLogos+level6TotalLogos+level7TotalLogos + level8TotalLogos + level9TotalLogos);
        setTotalPercent(totalCompleted / totalLogos * 100);

    }

    const handleLogout = () => {
        props.setLogged(false);
        localStorage.removeItem("Bearer");
        navigate("/");
    }

    useEffect(()=>{
        loadUserData();
    },[])


    const handleButtonText = (index) =>{
        if(index===0){
            return{
                level: "Level 1",
                completed: level1.completedLogos,
                percentage: level1.percenCompleted.toFixed(0)
            }
        }else if(index===1){
            return{
                level: "Level 2",
                completed: level2.completedLogos,
                percentage: level2.percenCompleted.toFixed(0)
            }
        }else if(index===2){
            return{
                level: "Level 3",
                completed: level3.completedLogos,
                percentage: level3.percenCompleted.toFixed(0)
            }
        }else if(index===3){
            return{
                level: "Level 4",
                completed: level4.completedLogos,
                percentage: level4.percenCompleted.toFixed(0)
            }
        }else if(index===4){
            return{
                level: "Level 5",
                completed: level5.completedLogos,
                percentage: level5.percenCompleted.toFixed(0)
            }
        }else if(index===5){
            return{
                level: "Level 6",
                completed: level6.completedLogos,
                percentage: level6.percenCompleted.toFixed(0)
            }
        }else if(index===6){
            return{
                level: "Level 7",
                completed: level7.completedLogos,
                percentage: level7.percenCompleted.toFixed(0)
            }
        }else if(index===7){
            return{
                level: "Level 8",
                completed: level8.completedLogos,
                percentage: level8.percenCompleted.toFixed(0)
            }
        }else if(index===8){
            return{
                level: "Level 9",
                completed: level9.completedLogos,
                percentage: level9.percenCompleted.toFixed(0)
            }
        }
    }

    const setLevelData = (levelArray,brandArray, clubArray, foodArray, countriesArray, animalsArray, capitalsArray, peopleArray, levelIndex)=>{
        levelArray.forEach(logo=>{
            if(logo.path.category===0){
                brandArray.push(logo);
            }else if(logo.path.category===1){
                clubArray.push(logo);
            }else if(logo.path.category===2){
                countriesArray.push(logo)
            }else if(logo.path.category===3){
                foodArray.push(logo)
            }else if(logo.path.category===4){
                animalsArray.push(logo)
            }else if(logo.path.category===5){
                capitalsArray.push(logo)
            }else if(logo.path.category===6){
                peopleArray.push(logo)
            }
        })

        if(brandArray.length >= logosInfo[levelIndex][0].arrays[0].array.length){
            logosInfo[levelIndex][0].arrays[0].completed= true;
        }
        if(clubArray.length >= logosInfo[levelIndex][0].arrays[1].array.length){
            logosInfo[levelIndex][0].arrays[1].completed= true;
        }
        if(countriesArray.length >= logosInfo[levelIndex][0].arrays[2].array.length){
            logosInfo[levelIndex][0].arrays[2].completed= true;
        }
        if(foodArray.length >= logosInfo[levelIndex][0].arrays[3].array.length){
            logosInfo[levelIndex][0].arrays[3].completed=true
        }
        if(animalsArray.length >= logosInfo[levelIndex][0].arrays[4].array.length){
            logosInfo[levelIndex][0].arrays[4].completed=true
        }
        if(capitalsArray.length >= logosInfo[levelIndex][0].arrays[5].array.length){
            logosInfo[levelIndex][0].arrays[5].completed=true
        }
        if(peopleArray.length >= logosInfo[levelIndex][0].arrays[6].array.length){
            logosInfo[levelIndex][0].arrays[6].completed=true
        }

        logosInfo[levelIndex][0].arrays[0].completedLogos=brandArray;
        logosInfo[levelIndex][0].arrays[1].completedLogos=clubArray;
        logosInfo[levelIndex][0].arrays[2].completedLogos=countriesArray;
        logosInfo[levelIndex][0].arrays[3].completedLogos=foodArray;
        logosInfo[levelIndex][0].arrays[4].completedLogos=animalsArray;
        logosInfo[levelIndex][0].arrays[5].completedLogos=capitalsArray;
        logosInfo[levelIndex][0].arrays[6].completedLogos=peopleArray;
    }

    const handleRedeem = (e, i) => {
        document.getElementById(`button-level-${i}`).style.backgroundColor='green';
        logosInfo[i][0].redeem=true;
        setTotalRedeem(totalRedeem+1);
        router.postRedeemLevel(i);
        props.setCoins(props.coins+400)
        router.coinsReward(400)
        createParticles(e)
    }

    const showCorrectButton = (index) => {
        const lvl= logosInfo[index][0]
        if(lvl.open){
            if(!lvl.completed){
                return(
                    <Button onClick={()=>chooseLevel(index)} className="levels-button" id={`button-level-${index}`} >
                        <div className='levels-btn-container'>
                            <div className="levels-button-texts-div">
                                <p className="level-btn-text">{handleButtonText(index).level}</p>
                                <p className="completed-btn-text">Completed logos: {handleButtonText(index).completed}</p>
                            </div>
                            <p className="levels-button-p">{handleButtonText(index).percentage}%</p>
                        </div>
                    </Button>
                )
            }else if(lvl.completed && !lvl.redeem){
                return(
                    <Button onClick={(e)=>handleRedeem(e, index)} className="levels-button redeem-button" id={`button-level-${index}`} >
                        <div className='levels-btn-container'>
                            <div className="levels-button-texts-div">
                                <p className="level-btn-text">Redeem your prize</p>
                                <p className="completed-btn-text">Completed logos: {handleButtonText(index).completed}</p>
                            </div>
                            <p className="levels-button-p">{handleButtonText(index).percentage}%</p>
                        </div>
                    </Button>
                )
            }else if(lvl.completed && lvl.redeem){
                return(
                    <Button onClick={()=>chooseLevel(index)} className="levels-button completed-level-button" id={`button-level-${index}`} >
                        <div className='levels-btn-container'>
                            <div className="levels-button-texts-div">
                                <p className="level-btn-text">Completed</p>
                                <p className="completed-btn-text">Completed logos: {handleButtonText(index).completed}</p>
                            </div>
                            <p className="levels-button-p">{handleButtonText(index).percentage}%</p>
                        </div>
                    </Button>
                )
            }
        }else{
            return(
                <Image alt="locked" src="https://img.icons8.com/material-sharp/344/lock--v1.png" className="levels-lock"></Image>
            )
        }
    }


    if(error.state){
        return(
            <ErrorComponent logout={handleLogout} message={error.message} />
        )
    }
    if(level1===null){
        return<div><LoadingComponent /></div>
    }

    return(
        <>
        <Container>
            <Row className="justify-content-center levels-title">
                <Col xs="auto"><h1>Choose your level</h1></Col>
            </Row>
            <Row className="justify-content-center levels-div">
            {logosInfo.map((level, i)=>
                <div className="levels-button-div" key={i}>
                    {showCorrectButton(i)}
                </div>
            )}
            </Row>
            <Image alt="logout" src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/344/external-log-out-user-interface-inkubators-basic-outline-inkubators.png" className="logout-button" onClick={()=>handleLogout()}></Image>
        </Container>
        </>
    )
}