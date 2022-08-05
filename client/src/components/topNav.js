import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './topNav.css';
import CountUp from 'react-countup';

export const TopNav = (props) => {

    const handleInfo = ()=> {
        if(window.location.pathname==="/levels"){
            return{
                title: 'Levels',
                return: 'none'
            }
        }else if(window.location.pathname==="/categories"){
            return{
                title: 'Categories',
                return: '/levels'
            }
        }else if(window.location.pathname==='/logos'){
            return{
                title: 'Logos',
                return: '/categories'
            }
        }else if(window.location.pathname==='/game'){
            return{
                title: `Level ${props.level + 1}`,
                return: '/logos'
            }
        }
    }
    const coins= props.coins;
    const navigate= useNavigate();
    
    const handleReturn = () => {
        navigate(handleInfo().return)
    }
    return(
        <Container fluid>
            <Row className="topNav-div">
                {handleInfo().return!=='none' && <Col xs={2} lg={1}><Image alt="return" src="https://img.icons8.com/flat-round/344/thick-long-left-arrow.png" className="return-button" onClick={()=>handleReturn()}></Image></Col>}
                <Col xs={2} lg={1} className="topNav-text">{handleInfo().title}</Col>
                <Col xs={{offset: 4, span: 1}} lg={{offset: 6, span: 1}}><Image alt="coins" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className='topNav-coin'></Image></Col>
                <Col xs={2} lg={1} className="topNav-text">{<CountUp preserveValue={true} end={props.coins} duration={1}/>}</Col>
            </Row>
        </Container>
    )
}