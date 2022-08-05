import "./categoriesPage.css";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { logosInfo } from "../logosInfo";
import { TopNav } from "./topNav";
import box from '../media/images/box.png'
import router from '../handelRouters';


export const CategoriesPage = (props) => {
    const navigate= useNavigate();
    if(props.level===null){
        return(
            navigate("/")
        )
    }
    const level= props.level
    const categories= logosInfo[level];
    
    const chooseCategory = (i) => {
        props.setCategory(i);
        navigate("/logos", {state: {level, category: props.category}})
    }

    const handleRedeem = (e, obj, i) => {
        e.target.src=obj.logo;
        document.getElementById(`categ-${i}`).style.display= 'none';
        props.setCoins(props.coins+75);
        router.postRedeemCategory(obj, i, level);
        router.coinsReward(75);
        obj.redeem=true;
    }

    const showCorrectImg = (completed, redeem, obj, index)=>{
        if(!completed){
            return <Image src={obj.logo} alt="logo" className="category-to-choose" onClick={()=>chooseCategory(index)} />
        }else if(completed && !redeem){
            return <Image src={box} alt="logo" className="category-to-choose" onClick={(e)=>handleRedeem(e, obj, index)} />
        }else if(completed && redeem){
            return <Image src={obj.logo} alt="logo" className="category-to-choose" onClick={()=>chooseCategory(index)} />
        }
    }
 
    return(
        <>
        <TopNav title="Categories" page="levels" coins={props.coins}/>
        <Container>
            <Row className="justify-content-center categories-div">
                {categories[0].arrays.map((c, i)=>{
                    return(
                    <Col xs={6} md={6} lg={4} key={i}>
                        <p className="categories-titles">{c.title}</p>
                        {showCorrectImg(c.completed, c.redeem, c, i)}
                        {(c.completed && !c.redeem) && <div className="redeem-info" id={`categ-${i}`}>
                                <img alt="coin" src="https://img.icons8.com/emoji/2x/coin-emoji.png" className="redeem-coin"></img>
                                <p className="redeem-p">100</p>
                            </div>}
                        <p className="categories-completed-text">Completed: {logosInfo[level][0].arrays[i].completedLogos.length} of {logosInfo[level][0].arrays[i].array.length}</p>
                    </Col>
                    )
                })}
            </Row>
        </Container>
        </>
    )
}