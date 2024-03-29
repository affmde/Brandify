import "./logosPage.css";
import { Container, Image, Row, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logosInfo } from "../logosInfo";
import { LogoModal } from "./logoModal";
import { useState } from "react";

export const LogosPage = (props) => {
    const [showLogoModal, setShowLogoModal] = useState(false);
    const [modalProps, setModalProps] = useState({});
    const navigate= useNavigate();
    const level= props.level;
    const category= props.category;
    const logos= logosInfo[level][0].arrays[category]

    //progress in category
    const progress=logosInfo[level][0].arrays[category].completedLogos.length / logosInfo[level][0].arrays[category].array.length *100;
    const chooseLogo = (i) =>{
        props.setLogo(i);
        navigate('/game');
    }
    if(progress>=100){
        logosInfo[level][0].arrays[category].completed= true;
    }

    const handleShowModal = (ctg)=>{
        setShowLogoModal(true);
        setModalProps(ctg)
    }

    return(
        <>
            <Container>
                <Row style={{marginTop: '1vh'}}>
                    <ProgressBar variant="sucess" animated now={progress} label={`${progress.toFixed(0)}%`}/>;
                </Row>
                <Row className="justify-content-center">
                <div className="logos-div">
                {logos.array.map((ctgory, i)=>{
                    return(
                        <div key={i} className="logo-area">
                            <Image src={ctgory.logoUrl} alt="logo" className="logo-to-choose" onClick={ctgory.completed ? ()=>handleShowModal(ctgory) : ()=>chooseLogo(ctgory)} />
                            {ctgory.completed && <Image src="https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-correct-press-and-media-flaticons-flat-flat-icons.png" alt="completed" className="logo-completed"></Image>}
                        </div>
                    )
                })}
                </div>
                </Row>
                <LogoModal 
                    show={showLogoModal}
                    onHide={() => setShowLogoModal(false)}
                    info={modalProps}
                />
            </Container>
        </>
        )
}