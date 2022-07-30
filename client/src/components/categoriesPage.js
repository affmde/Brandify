import "./categoriesPage.css";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { logosInfo } from "../logosInfo";
import { TopNav } from "./topNav";

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

    
    
    return(
        <>
        <TopNav title="Categories" page="levels" coins={props.coins}/>
        <Container>
            <Row className="justify-content-center categories-div">
                {categories[0].arrays.map((c, i)=>{
                    return(
                    <Col xs={6} md={6} lg={4} key={i} >
                        <p className="categories-titles">{c.title}</p>
                        <Image src={c.logo} alt="logo" className="category-to-choose" onClick={()=>chooseCategory(i)} />
                        <p className="categories-completed-text">Completed: {logosInfo[level][0].arrays[i].completedLogos.length} of {logosInfo[level][0].arrays[i].array.length}</p>
                    </Col>
                    )
                })}
            </Row>
        </Container>
        </>
    )
}