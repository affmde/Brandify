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
        console.log(data)
        if(data.err){
            return setError({...error, state: true, message: data.message});
            
        }
        props.setCoins(data.coins);

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
            }
        })
        
        //Level 1 data
        const level1TotalLogos= logosInfo[0][0].arrays[0].array.length + logosInfo[0][0].arrays[1].array.length + logosInfo[0][0].arrays[2].array.length;
        const level1PercentCompleted= (lvl1.length / level1TotalLogos * 100);
        if(level1PercentCompleted>60){
            logosInfo[1][0].open=true
        }
        const l1brands=[];
        const l1clubs=[];
        const l1countries=[];
        setLevelData(lvl1,l1brands, l1clubs, l1countries, 0);
        
        setLevel1({...level1,
            totalLogos: level1TotalLogos,
            completedLogos: lvl1.length,
            percenCompleted: level1PercentCompleted,
        })

        //Level 2 data
        const level2TotalLogos= logosInfo[1][0].arrays[0].array.length + logosInfo[1][0].arrays[1].array.length + logosInfo[1][0].arrays[2].array.length;
        const level2PercentCompleted= (lvl2.length / level2TotalLogos *100);

        const l2brands=[];
        const l2clubs=[];
        const l2countries=[];
        setLevelData(lvl2,l2brands, l2clubs, l2countries, 1);
        setLevel2({...level2,
            totalLogos: level2TotalLogos,
            completedLogos: lvl2.length,
            percenCompleted: level2PercentCompleted,
        })
        
        // set level 3 data
        const level3TotalLogos= logosInfo[2][0].arrays[0].array.length + logosInfo[2][0].arrays[1].array.length + logosInfo[2][0].arrays[2].array.length;
        const level3PercentCompleted= (lvl3.length / level3TotalLogos * 100);
        if(level2PercentCompleted>60){
            logosInfo[2][0].open=true
        }
        const l3brands=[];
        const l3clubs=[];
        const l3countries=[];
        setLevelData(lvl3,l3brands, l3clubs, l3countries, 2);
        
        setLevel3({...level3,
            totalLogos: level3TotalLogos,
            completedLogos: lvl3.length,
            percenCompleted: level3PercentCompleted,
        })


        //set level 4 data
        const level4TotalLogos= logosInfo[3][0].arrays[0].array.length + logosInfo[3][0].arrays[1].array.length + logosInfo[3][0].arrays[2].array.length;
        const level4PercentCompleted= (lvl4.length / level4TotalLogos * 100);
        if(level3PercentCompleted>60){
            logosInfo[3][0].open=true
        }
        const l4brands=[];
        const l4clubs=[];
        const l4countries=[];

        setLevelData(lvl4,l4brands, l4clubs, l4countries, 3);

        setLevel4({...level4,
            totalLogos: level4TotalLogos,
            completedLogos: lvl4.length,
            percenCompleted: level4PercentCompleted,
        })

        //Set level 5 data
        const level5TotalLogos= logosInfo[4][0].arrays[0].array.length + logosInfo[4][0].arrays[1].array.length + logosInfo[4][0].arrays[2].array.length;
        const level5PercentCompleted= (lvl5.length / level5TotalLogos * 100);
        if(level4PercentCompleted>60){
            logosInfo[4][0].open=true
        }
        const l5brands=[];
        const l5clubs=[];
        const l5countries=[];
        
        setLevelData(lvl5,l5brands, l5clubs, l5countries, 4);

        setLevel5({...level5,
            totalLogos: level5TotalLogos,
            completedLogos: lvl5.length,
            percenCompleted: level5PercentCompleted,
        })

        //set level 6 data
        const level6TotalLogos= logosInfo[5][0].arrays[0].array.length + logosInfo[5][0].arrays[1].array.length + logosInfo[5][0].arrays[2].array.length;
        const level6PercentCompleted= (lvl6.length / level6TotalLogos * 100);
        if(level5PercentCompleted>60){
            logosInfo[5][0].open=true
        }
        const l6brands=[];
        const l6clubs=[];
        const l6countries=[];

        setLevelData(lvl6,l6brands, l6clubs, l6countries, 5);
        
        setLevel6({...level6,
            totalLogos: level6TotalLogos,
            completedLogos: lvl6.length,
            percenCompleted: level6PercentCompleted,
        })

        //Total data stats
        setTotalCompleted(lvl1.length + lvl2.length + lvl3.length + lvl4.length+lvl5.length+lvl6.length);
        setTotalLogos( level1TotalLogos + level2TotalLogos + level3TotalLogos + level4TotalLogos+level5TotalLogos+level6TotalLogos);
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
        }
    }

    const setLevelData = (levelArray,brandArray, clubArray, countriesArray, levelIndex)=>{
        levelArray.forEach(logo=>{
            if(logo.path.category===0){
                brandArray.push(logo);
            }else if(logo.path.category===1){
                clubArray.push(logo);
            }else if(logo.path.category===2){
                countriesArray.push(logo)
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

        logosInfo[levelIndex][0].arrays[0].completedLogos=brandArray;
        logosInfo[levelIndex][0].arrays[1].completedLogos=clubArray;
        logosInfo[levelIndex][0].arrays[2].completedLogos=countriesArray;

        
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
        <TopNav title="Levels" base="base" coins={props.coins}/>
        <Container>
            <Row className="justify-content-center levels-title">
                <Col xs="auto"><h1>Choose your level</h1></Col>
            </Row>
            <Row className="justify-content-center levels-div">
            {logosInfo.map((level, i)=>
                <div className="levels-button-div" key={i}>
                    {logosInfo[i][0].open && <Button onClick={()=>chooseLevel(i)} className="levels-button">
                            <div className='levels-btn-container'>
                                <div className="levels-button-texts-div">
                                    <p className="level-btn-text">{handleButtonText(i).level}</p>
                                    <p className="completed-btn-text">Completed logos: {handleButtonText(i).completed}</p>
                                </div>
                                <p className="levels-button-p">{handleButtonText(i).percentage}%</p>
                            </div>
                        </Button>}
                    {!logosInfo[i][0].open && <Image alt="locked" src="https://img.icons8.com/material-sharp/344/lock--v1.png" className="levels-lock"></Image>}
                </div>
            )}
            </Row>
            <Image alt="logout" src="https://img.icons8.com/external-inkubators-basic-outline-inkubators/344/external-log-out-user-interface-inkubators-basic-outline-inkubators.png" className="logout-button" onClick={()=>handleLogout()}></Image>
        </Container>
        </>
    )
}