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
        const lvl1=[];
        const lvl2= [];
        const lvl3= [];
        const lvl4= [];
        const lvl5=[];
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
        
        setLevel1({...level1,
            totalLogos: level1TotalLogos,
            completedLogos: lvl1.length,
            percenCompleted: level1PercentCompleted,
        })

        //Level 2 data
        const level2TotalLogos= logosInfo[1][0].arrays[0].array.length + logosInfo[1][0].arrays[1].array.length + logosInfo[1][0].arrays[2].array.length;
        const level2PercentCompleted= (lvl2.length / level2TotalLogos *100);
        setLevel2({...level2,
            totalLogos: level2TotalLogos,
            completedLogos: lvl2.length,
            percenCompleted: level2PercentCompleted,
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

        
        // set level 3 data
        const level3TotalLogos= logosInfo[2][0].arrays[0].array.length + logosInfo[2][0].arrays[1].array.length + logosInfo[2][0].arrays[2].array.length;
        const level3PercentCompleted= (lvl3.length / level3TotalLogos * 100);
        if(level2PercentCompleted>60){
            logosInfo[2][0].open=true
        }
        const l3brands=[];
        const l3clubs=[];
        const l3countries=[];
        lvl3.forEach(logo=>{
            if(logo.path.category===0){
                l3brands.push(logo);
            }else if(logo.path.category===1){
                l3clubs.push(logo);
            }else if(logo.path.category===2){
                l3countries.push(logo)
            }
        })
        if(l3brands.length >= logosInfo[2][0].arrays[0].array.length){
            logosInfo[2][0].arrays[0].completed= true;
        }
        if(l3clubs.length >= logosInfo[2][0].arrays[1].array.length){
            logosInfo[2][0].arrays[1].completed= true;
        }
        if(l3countries.length >= logosInfo[2][0].arrays[2].array.length){
            logosInfo[2][0].arrays[2].completed= true;
        }
        logosInfo[2][0].arrays[0].completedLogos=l3brands;
        logosInfo[2][0].arrays[1].completedLogos=l3clubs;
        logosInfo[2][0].arrays[2].completedLogos=l3countries;
        
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
        lvl4.forEach(logo=>{
            if(logo.path.category===0){
                l4brands.push(logo);
            }else if(logo.path.category===1){
                l4clubs.push(logo);
            }else if(logo.path.category===2){
                l4countries.push(logo)
            }
        })
        if(l4brands.length >= logosInfo[3][0].arrays[0].array.length){
            logosInfo[3][0].arrays[0].completed= true;
        }
        if(l4clubs.length >= logosInfo[3][0].arrays[1].array.length){
            logosInfo[3][0].arrays[1].completed= true;
        }
        if(l4countries.length >= logosInfo[3][0].arrays[2].array.length){
            logosInfo[3][0].arrays[2].completed= true;
        }
        logosInfo[3][0].arrays[0].completedLogos=l4brands;
        logosInfo[3][0].arrays[1].completedLogos=l4clubs;
        logosInfo[3][0].arrays[2].completedLogos=l4countries;
        
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
        lvl5.forEach(logo=>{
            if(logo.path.category===0){
                l5brands.push(logo);
            }else if(logo.path.category===1){
                l5clubs.push(logo);
            }else if(logo.path.category===2){
                l5countries.push(logo)
            }
        })
        if(l5brands.length >= logosInfo[4][0].arrays[0].array.length){
            logosInfo[4][0].arrays[0].completed= true;
        }
        if(l5clubs.length >= logosInfo[4][0].arrays[1].array.length){
            logosInfo[4][0].arrays[1].completed= true;
        }
        if(l5countries.length >= logosInfo[4][0].arrays[2].array.length){
            logosInfo[4][0].arrays[2].completed= true;
        }
        logosInfo[4][0].arrays[0].completedLogos=l5brands;
        logosInfo[4][0].arrays[1].completedLogos=l5clubs;
        logosInfo[4][0].arrays[2].completedLogos=l5countries;
        
        setLevel5({...level5,
            totalLogos: level5TotalLogos,
            completedLogos: lvl5.length,
            percenCompleted: level5PercentCompleted,
        })

        //Total data stats
        setTotalCompleted(lvl1.length + lvl2.length + lvl3.length + lvl4.length);
        setTotalLogos( level1TotalLogos + level2TotalLogos + level3TotalLogos + level4TotalLogos);
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