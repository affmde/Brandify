const coinsReward = async (coins) =>{
    const body={
        coins
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


const postRedeemCategory = async (obj, category, level) => {
    const body={
        category: obj,
        path: {
            level,
            category,
        }
    };
    const requestOptions= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("Bearer")}` },
        body: JSON.stringify(body)
    };
    try{
        const response= await fetch("/users/addRedeemedCategory", requestOptions);
        const data= await response.json();
        
    }catch(err){
        console.log(err)
    }
}


const postRedeemLevel = async (level) => {
    const body={
        level
    };
    const requestOptions= {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem("Bearer")}` },
        body: JSON.stringify(body)
    };
    try{
        const response= await fetch("/users/addRedeemedLevel", requestOptions);
        const data= await response.json();
        
    }catch(err){
        console.log(err)
    }
}



const handleRouters = {
    coinsReward,
    postRedeemCategory,
    postRedeemLevel
}

export default handleRouters