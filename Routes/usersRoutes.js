const Users = require("../Models/usersModel");
const bcrypt= require("bcrypt");
const usersRouter= require('express').Router();
var jwt = require('jsonwebtoken');

//CreateNewUser
usersRouter.post("/createUser", async(req, res)=>{
    const body= req.body;
    const password= await bcrypt.hash(body.password, 10);
    const newUser= {
        username: body.username,
        email: body.email,
        password: password,
        completedLogos: [],
        coins: 0
    }

    const saveUser= new Users(newUser)
    try{
        const response = await saveUser.save();
        res.status(201).json(response)
    }catch(err){
        console.log(err)
        res.status(404).json(err)
    }
})

usersRouter.post("/login", async(req, res)=>{
    const body= req.body;
    const user= await Users.findOne({username: body.username});
    if(!user){
        return res.status(401).json({
            error: 'Invalid username or password'
        })
    }

    const passwordCorrect= await bcrypt.compare(body.password, user.password);
    if(!passwordCorrect){
        return res.status(401).json({
            error: 'Invalid username or password'
        })
    }
    const userForToken = {
        username: user.username,
        id: user._id,
    }
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60*60 });
    res.status(200).send({token})

});

//Get User data

usersRouter.get("/user", async (req, res)=> {
    const headers= req.headers;
    const body= req.body;
    let tk;
    if (headers.authorization.startsWith("Bearer ")){
        tk= headers.authorization.substring(7, headers.authorization.length);
   } else {
      //Error
   }
   let id;
   try{
    jwt.verify(tk, process.env.SECRET, function(err, decoded) {
        if(err){
            res.status(400).send({err: "You can't see this page!"});
        }
        id= decoded.id
    });
    if(id){
        const user= await Users.findById(id);
        res.status(201).json({coins: user.coins, completedLogos: user.completedLogos})
    }else{
       console.log("error, but working?")
    } 
   }catch(error){
        res.status(400).send({err: "You can't see this page!"});
   }
})


//Save Coins
usersRouter.post("/coins", async (req, res)=> {
    const headers= req.headers;
    const body= req.body
    console.log(body)
    let tk;
    if (headers.authorization.startsWith("Bearer ")){
        tk= headers.authorization.substring(7, headers.authorization.length);
   } else {
      //Error
   }
   let id;
    jwt.verify(tk, process.env.SECRET, function(err, decoded) {
        if(err){
            return res.status(401).json({err: "You can't see this page!"})
        }
        
        id= decoded.id
    });
    try{
        if(id){
            const user = await Users.findByIdAndUpdate(id, {$inc: {coins: body.coins}})
            res.status(200).json({message: "Updated successfuly!"})
        }
    }catch(err){
        res.status(404).json({err: "Something happened"})
    }
})


//add logo completed
usersRouter.post("/addLogo", async (req, res)=>{
    const headers= req.headers;
    const body= req.body;
    
    let tk;
    if (headers.authorization.startsWith("Bearer ")){
        tk= headers.authorization.substring(7, headers.authorization.length);
   } else {
      //Error
   }
   let id;
    jwt.verify(tk, process.env.SECRET, function(err, decoded) {
        if(err){
            return res.status(401).json({err: "You can't see this page!"})
        }
        
        id= decoded.id
    });
    try{
        if(id){
            const user = await Users.findByIdAndUpdate(id, {$push: {completedLogos: {logo: body.logo, path: body.path}}})
            res.status(200).json({message: "Updated successfuly!"})
        }
    }catch(err){
        res.status(404).json({err: "Something happened"})
    }
})


module.exports = usersRouter;