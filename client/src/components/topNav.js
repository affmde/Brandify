import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './topNav.css';

export const TopNav = (props) => {
    const navigate= useNavigate();
    
    const handleReturn = () => {
        navigate(`/${props.page}`)
    }
    return(
        <Container fluid>
            <Row className="topNav-div">
                {props.base!=="base" && <Col xs={2} lg={1}><Image alt="return" src="https://img.icons8.com/flat-round/344/thick-long-left-arrow.png" className="return-button" onClick={()=>handleReturn()}></Image></Col>}
                <Col xs={2} lg={1} className="topNav-text">{props.title}</Col>
                <Col xs={{offset: 4, span: 2}} lg={{offset: 6, span: 1}}><Image alt="coins" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className='topNav-coin'></Image></Col>
                <Col xs={2} lg={1} className="topNav-text">{props.coins}</Col>
            </Row>
        </Container>
    )
}