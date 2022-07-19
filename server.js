const express= require("express");
const app= express();
const cors= require("cors");
const mongoose= require("mongoose");
const usersRouter = require('./Routes/usersRoutes');

require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
    console.log('Mongoose connected successfuly!')
})


//Middlewares
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use(express.static(__dirname + '/client'));



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`App listen on port: ${PORT}`)
})



