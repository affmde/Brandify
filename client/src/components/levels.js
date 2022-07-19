import './levels.css';
import { useState} from 'react';
import { Button, Container, Row, Col, Image} from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import { logosInfo } from "../logosInfo";
import { TopNav } from './topNav';
import { useEffect } from 'react';
import { ErrorComponent } from './handlingComponents/Error/errorComponent';
import { LoadingComponent } from './handlingComponents/Loading/loadingComponent';

export const LevelsPage = (props) => {
    const [totalLogos, setTotalLogos] = useState(0);
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [totalPercent, setTotalPercent] = useState(0);
    const [error, setError] = useState(false);
    const [level1, setLevel1] = useState(null);
    const [level2, setLevel2] = useState(null);
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
        const response = await fetch("http://localhost:3001/users/user", requestOptions );
        const data= await response.json();
        
        if(data.err){
            console.log('error ')
            setError(true);
        }
        props.setCoins(data.coins);

        //set completed logos as completed in the general data
        for(let i=0; i<data.completedLogos.length; i++){
            const path= data.completedLogos[i].path;
            logosInfo[path.level][0].arrays[path.category].array[path.index].completed=true;
        }

        //set all completed logos by level
        const lvl1=[]
        const lvl2= []
        const lvl3= []
        data.completedLogos.forEach((obj, i)=>{
            if(obj.path.level===0){
                lvl1.push(obj)
            }else if(obj.path.level===1){
                lvl2.push(obj)
            }else if(obj.path.levle===3){
                lvl3.push(obj)
            }
        })
        
        //Level 1 data
        const level1TotalLogos= logosInfo[0][0].arrays[0].array.length + logosInfo[0][0].arrays[1].array.length + logosInfo[0][0].arrays[2].array.length;
        const level1PercentCompleted= (lvl1.length / level1TotalLogos * 100);
        const l1brands=[];
        const l1clubs=[];
        const l1countries=[];
        lvl1.forEach(logo=>{
            if(logo.path.category===0){
                l1brands.push(logo);
            }else if(logo.path.category===1){
                l1clubs.push(logo);
            }else if(logo.path.category===2){
                l1countries.push(logo)
            }
        })
        if(l1brands.length >= logosInfo[0][0].arrays[0].array.length){
            logosInfo[0][0].arrays[0].completed= true;
        }
        if(l1clubs.length >= logosInfo[0][0].arrays[1].array.length){
            logosInfo[0][0].arrays[1].completed= true;
        }
        if(l1countries.length >= logosInfo[0][0].arrays[2].array.length){
            logosInfo[0][0].arrays[2].completed= true;
        }
        logosInfo[0][0].arrays[0].completedLogos=l1brands;
        logosInfo[0][0].arrays[1].completedLogos=l1clubs;
        logosInfo[0][0].arrays[2].completedLogos=l1countries;
        
        setLevel1({
            totalLogos: level1TotalLogos,
            completedLogos: lvl1.length,
            percenCompleted: level1PercentCompleted
        })

        //Level 2 data
        const level2TotalLogos= logosInfo[1][0].arrays[0].array.length + logosInfo[1][0].arrays[1].array.length + logosInfo[1][0].arrays[2].array.length;
        const level2PercentCompleted= (lvl2.length / level2TotalLogos *100);
        setLevel2({
            totalLogos: level2TotalLogos,
            completedLogos: lvl2.length,
            percenCompleted: level2PercentCompleted
        })

        const l2brands=[];
        const l2clubs=[];
        const l2countries=[];
        lvl2.forEach(logo=>{
            if(logo.path.category===0){
                l2brands.push(logo);
            }else if(logo.path.category===1){
                l2clubs.push(logo);
            }else if(logo.path.category===2){
                l2countries.push(logo);
            }
        })
        if(l2brands.length >= logosInfo[1][0].arrays[0].array.length){
            logosInfo[1][0].arrays[0].completed= true;
        }
        if(l2clubs.length >= logosInfo[1][0].arrays[1].array.length){
            logosInfo[1][0].arrays[1].completed= true;
        }
        if(l2countries.length >= logosInfo[1][0].arrays[2].array.length){
            logosInfo[1][0].arrays[1].completed= true;
        }
        logosInfo[1][0].arrays[0].completedLogos=l2brands;
        logosInfo[1][0].arrays[1].completedLogos=l2clubs;
        logosInfo[1][0].arrays[2].completedLogos=l2countries;

        //Total data stats
        setTotalCompleted(lvl1.length + lvl2.length);
        setTotalLogos( level1TotalLogos + level2TotalLogos);
        setTotalPercent(totalCompleted / totalLogos * 100);

    }

    const handleLogout = () => {
        props.setLogged(false);
        localStorage.removeItem("Bearer");
        navigate("/");
    }

    useEffect(()=>{

        //set next level open if current level achieves at least 60%
        for(let i= 0; i<logosInfo.length; i++){
            const totalCompleted= logosInfo[i][0].arrays[0].completedLogos.length+logosInfo[0][0].arrays[1].completedLogos.length;
            const total=logosInfo[i][0].arrays[0].array.length+logosInfo[0][0].arrays[1].array.length;
            logosInfo[i][0].totalLogosCompleted=totalCompleted;
            logosInfo[i][0].percentCompleted= totalCompleted / total *100
            
            if(logosInfo[i][0].percentCompleted > 60){
                logosInfo[i+1][0].open=true;
            }
        }

        loadUserData();
        console.log(logosInfo)
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
        }
    }

    if(error){
        return(
            <ErrorComponent logout={handleLogout} />
        )
    }
    if(level1===null){
        return<div><LoadingComponent /></div>
    }

    return(
        <>
        <TopNav title="Levels" base="base" coins={props.coins}/>
        <Container>
            <Row className="justify-content-center levels-title">
                <Col xs="auto"><h1>Choose your level</h1></Col>
            </Row>
            <Row className="justify-content-center levels-div">
            {logosInfo.map((level, i)=>
                <div className="levels-button-div" key={i}>
                    {level[0].open && <Button onClick={()=>chooseLevel(i)} className="levels-button">
                            <div className='levels-btn-container'>
                                <div className="levels-button-texts-div">
                                    <p className="level-btn-text">{handleButtonText(i).level}</p>
                                    <p className="completed-btn-text">Completed logos: {handleButtonText(i).completed}</p>
                                </div>
                                <p className="levels-button-p">{handleButtonText(i).percentage}%</p>
                            </div>
                        </Button>}
                    {!level[0].open && <Image alt="locked" src="https://img.icons8.com/material-sharp/344/lock--v1.png" className="levels-lock"></Image>}
                </div>
            )}
            </Row>
            <Image alt="logout" src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/344/external-log-out-user-interface-inkubators-basic-outline-inkubators.png" className="logout-button" onClick={()=>handleLogout()}></Image>
        </Container>
        </>
    )
}